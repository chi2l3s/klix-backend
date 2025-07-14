import { Injectable } from '@nestjs/common'
import * as Upload from 'graphql-upload/Upload.js'
import * as sharp from 'sharp'
import { v4 as uuid } from 'uuid'

import { PlaylistType, User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { StorageService } from '../../libs/storage/storage.service'

import { CreatePlaylistInput } from './inputs/create-playlist.input'

@Injectable()
export class PlaylistService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly storageService: StorageService
	) {}

	async create(user: User, input: CreatePlaylistInput) {
		const { title, description, isPrivate, songsIds, coverUrl } = input

		await this.prismaService.playlist.create({
			data: {
				title,
				description,
				coverUrl,
				type: isPrivate ? PlaylistType.PRIVATE : PlaylistType.PUBLIC,
				songs: {
					connect: songsIds.map(id => ({ id }))
				},
				creator: {
					connect: {
						id: user.id
					}
				}
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

		const filename = `/playlist/covers/${uuid()}.jpeg`

		if (file.filename) {
			const processedBuffer = await sharp(buffer)
				.resize(1400, 1400)
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
}
