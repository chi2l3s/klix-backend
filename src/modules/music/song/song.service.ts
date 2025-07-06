import {
	BadRequestException,
	Injectable,
	NotFoundException,
	StreamableFile
} from '@nestjs/common'
import { Request, Response } from 'express'
import * as Upload from 'graphql-upload/Upload.js'
import * as sharp from 'sharp'
import { v4 as uuid } from 'uuid'

import { Prisma, SongStatus, User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { StorageService } from '../../libs/storage/storage.service'
import { ArtistService } from '../artist/artist.service'

import { EditSongInput } from './inputs/create-song.input'
import { FiltersInput } from './inputs/filters.input'
import { SongLyricsInput } from './inputs/song-lyrics-input'

@Injectable()
export class SongService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly artistService: ArtistService,
		private readonly storageService: StorageService
	) {}

	async getSongById(id: string) {
		return await this.prismaService.song.findUnique({
			where: { id },
			include: { artists: true }
		})
	}

	async uploadSong(
		user: User,
		file: Upload & { duration?: number; coverBuffer?: Buffer }
	) {
		const fileName = `/songs/${uuid()}.mp3`

		const chunks: Buffer[] = []
		for await (const chunk of file.createReadStream()) {
			chunks.push(chunk)
		}
		const buffer = Buffer.concat(chunks)

		await this.storageService.upload(buffer, fileName, 'audio/mpeg')

		const { duration, title, coverBuffer } = file

		let coverUrl: string | null = null
		if (coverBuffer) {
			coverUrl = await this.uploadCoverFromBuffer(coverBuffer)
		}

		await this.prismaService.song.create({
			data: {
				title,
				duration,
				audioUrl: fileName,
				uploader: { connect: { id: user.id } },
				coverUrl
			}
		})

		return true
	}

	async uploadCover(file: Upload) {
		const chunks: Buffer[] = []

		for await (const chunk of file.createReadStream()) {
			chunks.push(chunk)
		}

		const buffer = Buffer.concat(chunks)

		const filename = `/covers/${uuid()}.jpeg`

		if (file.filename) {
			const processedBuffer = await sharp(buffer)
				.resize(1000, 1000)
				.jpeg()
				.toBuffer()

			await this.storageService.upload(
				processedBuffer,
				filename,
				'image/jpeg'
			)
		}

		return filename
	}

	async uploadCoverFromBuffer(buffer: Buffer) {
		const filename = `/covers/${uuid()}.jpeg`
		const processedBuffer = await sharp(buffer)
			.resize(1000, 1000)
			.jpeg()
			.toBuffer()
		await this.storageService.upload(
			processedBuffer,
			filename,
			'image/jpeg'
		)
		return filename
	}

	async getFavorites(user: User, filters: FiltersInput = {}) {
		const { take, skip, searchTerm } = filters

		const whereClause = searchTerm ? this.search(searchTerm) : undefined

		const songs = await this.prismaService.song.findMany({
			take: take ? take : undefined,
			skip: skip ?? 0,
			where: {
				AND: [
					whereClause,
					{
						OR: [
							{
								users: {
									some: {
										id: user.id
									}
								}
							},
							{
								uploaderId: user.id
							}
						]
					}
				].filter(Boolean)
			},
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				artists: true
			}
		})

		return songs
	}

	async addLyrics(input: SongLyricsInput) {
		const { lines, id } = input

		const song = await this.prismaService.song.findUnique({ where: { id } })

		if (!song) {
			throw new NotFoundException('Песня не найдена')
		}

		const lyrics = JSON.stringify(lines)

		await this.prismaService.song.update({
			where: {
				id,
			},
			data: {
				lyrics
			}
		})

		return true
	}

	async getSongs(input: FiltersInput = {}) {
		const { take, skip, searchTerm } = input

		const whereClause = searchTerm ? this.search(searchTerm) : undefined

		const songs = await this.prismaService.song.findMany({
			take: take ?? 12,
			skip: skip ?? 0,
			where: {
				...whereClause
			},
			include: {
				artists: true
			}
		})

		return songs
	}

	private search(searchTerm: string): Prisma.SongWhereInput {
		return {
			OR: [
				{
					title: {
						contains: searchTerm,
						mode: 'insensitive'
					},
					artists: {
						some: {
							name: {
								contains: searchTerm,
								mode: 'insensitive'
							}
						}
					}
				}
			]
		}
	}

	async streamAudio(trackId: string, req: Request, res: Response) {
		const song = await this.prismaService.song.findUnique({
			where: { id: trackId }
		})

		if (!song) throw new NotFoundException('Песня не найдена')

		const key = song.audioUrl
		const meta = await this.storageService.getFileMeta(key)
		const total = meta.contentLength

		res.set({
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Headers': 'Range',
			'Access-Control-Expose-Headers':
				'Content-Range, Content-Length, Accept-Ranges'
		})

		const range = req.headers.range
		if (!range) {
			// Критическая часть: если нет range-запроса, НЕ отдаём весь файл, а возвращаем 416 или заглушку
			res.status(416).set({
				'Content-Range': `bytes */${total}`
			})
			return res.end()
		}

		const parts = range.replace(/bytes=/, '').split('-')
		const start = parseInt(parts[0], 10)
		const end = parts[1] ? parseInt(parts[1], 10) : total - 1

		if (start >= total || end >= total || start > end) {
			res.status(416).set({
				'Content-Range': `bytes */${total}`
			})
			throw new BadRequestException('Неверный диапазон')
		}

		const chunkSize = end - start + 1

		res.status(206).set({
			'Content-Range': `bytes ${start}-${end}/${total}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunkSize,
			'Content-Type': 'audio/mpeg'
		})

		const stream = await this.storageService.createReadStreamWithRange(
			key,
			`bytes=${start}-${end}`
		)
		return stream.pipe(res)
	}

	async editSong(user: User, input: EditSongInput) {
		const { id, title, artists, genres } = input

		const song = await this.prismaService.song.findUnique({
			where: { id: id }
		})

		if (!song) {
			throw new NotFoundException('Песня не найдена')
		}

		if (song.status !== SongStatus.ON_COMPLETED) {
			throw new BadRequestException('Этот трек нельзя редактировать')
		}

		if (song.uploaderId !== user.id) {
			throw new BadRequestException(
				'Вы не можете редактировать чужой трек'
			)
		}

		const artistIds = []

		for await (const artistName of artists) {
			const createdArtist = await this.artistService.createArtist({
				name: artistName
			})

			artistIds.push(createdArtist.id)
		}

		await this.prismaService.song.update({
			where: {
				id: song.id
			},
			data: {
				title,
				artists: {
					connect: artistIds.map(id => ({ id }))
				},
				genres,
				status: SongStatus.MODERATION
			}
		})

		return true
	}
}
