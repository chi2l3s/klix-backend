import { Injectable } from '@nestjs/common'
import { transliterate } from 'transliteration'

import { Prisma } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { FiltersInput } from '../song/inputs/filters.input'

import { CreateArtistInput } from './inputs/create-artist.input'

@Injectable()
export class ArtistService {
	constructor(private readonly prisma: PrismaService) {}

	async createArtist(input: CreateArtistInput) {
		const { name } = input

		const slug = transliterate(name, {
			replace: { ' ': '_' }
		}).toLowerCase()

		const existingArtist = await this.prisma.artist.findUnique({
			where: {
				slug
			}
		})

		if (existingArtist) {
			return existingArtist
		}

		const artist = await this.prisma.artist.create({
			data: {
				name,
				slug
			}
		})

		return artist
	}

	async getArtists() {
		const artists = await this.prisma.artist.findMany()

		return artists
	}

	async getArtistBySlug(slug: string) {
		const artist = await this.prisma.artist.findUnique({
			where: {
				slug
			},
			include: {
				albums: {
					include: {
						songs: true
					}
				}
			}
		})

		return artist
	}

	async findArtists(filters: FiltersInput = {}) {
		const { take, skip, searchTerm } = filters

		const whereClause = searchTerm ? this.search(searchTerm) : undefined

		const artists = await this.prisma.artist.findMany({
			take: take ?? 5,
			skip: skip ?? 0,
			where: {
				...whereClause
			}
		})

		return artists
	}

	private search(searchTerm: string): Prisma.ArtistWhereInput {
		return {
			name: {
				contains: searchTerm,
				mode: 'insensitive'
			}
		}
	}
}
