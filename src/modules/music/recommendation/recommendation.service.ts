import { HttpService } from '@nestjs/axios'
import {
	Injectable,
	InternalServerErrorException,
	NotFoundException
} from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { firstValueFrom } from 'rxjs'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { PlaylistService } from '../playlist/playlist.service'

import { RecommendationResponse } from './models/recommendation.model'
import { format } from 'date-format-parse'

@Injectable()
export class RecommendationService {
	private readonly baseUrl: string

	constructor(
		private readonly httpService: HttpService,
		private readonly prismaService: PrismaService,
		private readonly playlistService: PlaylistService
	) {
		this.baseUrl = 'http://localhost:8000'
	}

	@Cron(CronExpression.EVERY_DAY_AT_6AM)
	async generateDailyMixes() {
		const users = await this.prismaService.user.findMany()

		for (const user of users) {
			const mixes =
				await this.prismaService.recommendationPlaylist.findMany({
					where: {
						userId: user.id
					}
				})

			if (mixes) {
				await this.prismaService.recommendationPlaylist.deleteMany({
					where: {
						id: user.id
					}
				})
			}

			const recommendation = await this.getRecommendations(user.id, 10)

			if (recommendation.length) {
				const recommendations = await Promise.all(
					recommendation.map(song =>
						this.prismaService.recommendation.create({
							data: {
								userId: user.id,
								songId: song.song_id,
								score: song.score
							}
						})
					)
				)

				await this.prismaService.recommendationPlaylist.create({
					data: {
						title: 'Ежедневный микс',
						description:
							'Собрано алгоритмами. Одобрено твоим вкусом. Музыкальный микс, который подстраивается под твой день.',
						user: {
							connect: {
								id: user.id
							}
						},
						recommendations: {
							connect: recommendations.map(song => ({
								id: song.id
							}))
						}
					}
				})
			}
		}
	}

	async saveMixPlaylist(user: User, mixId: string) {
		const mix = await this.prismaService.recommendationPlaylist.findUnique({
			where: { id: mixId },
			include: {
				user: true
			}
		})

		if (!mix) {
			throw new NotFoundException('Микс не найден')
		}

		const recommendations =
			await this.prismaService.recommendation.findMany({
				where: {
					userId: user.id,
					playlists: {
						some: {
							id: mix.id
						}
					}
				},
				include: {
					song: {
						include: {
							artists: true
						}
					},
					user: true
				},
				orderBy: {
					score: 'desc'
				}
			})

		await this.playlistService.create(user, {
			title: `Для вас ${format(new Date(mix.createdAt), "DD.MM.YYYY")}`,
			description: mix.description,
			isPrivate: false,
			songsIds: recommendations.map(rec => rec.song.id)
		})

		return true
	}

	async getMixPlaylist(user: User, mixId: string) {
		const mix = await this.prismaService.recommendationPlaylist.findUnique({
			where: { id: mixId },
			include: {
				user: true
			}
		})

		if (!mix) {
			throw new NotFoundException('Микс не найден')
		}

		const recommendations =
			await this.prismaService.recommendation.findMany({
				where: {
					userId: user.id,
					playlists: {
						some: {
							id: mix.id
						}
					}
				},
				include: {
					song: {
						include: {
							artists: true
						}
					},
					user: true
				},
				orderBy: {
					score: 'desc'
				}
			})

		return {
			...mix,
			recommendations
		}
	}

	async getUserRecommendations(user: User) {
		const mixes = await this.prismaService.recommendationPlaylist.findMany({
			where: {
				userId: user.id
			},
			include: {
				recommendations: {
					include: {
						song: {
							include: {
								artists: true
							}
						}
					}
				}
			}
		})

		return mixes
	}

	async getRecommendations(userId: string, limit: number) {
		const res = await firstValueFrom(
			this.httpService.post<RecommendationResponse[]>(
				`${this.baseUrl}/recommendations`,
				{
					user_id: userId,
					limit
				}
			)
		)

		return res.data
	}
}
