import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { MixModel } from './models/mix.model'
import { RecommendationResponse } from './models/recommendation.model'
import { RecommendationService } from './recommendation.service'

@Resolver('Recommendation')
export class RecommendationResolver {
	constructor(
		private readonly recommendationService: RecommendationService,
		private readonly prismaService: PrismaService
	) {}

	@Authorization()
	@Query(() => [RecommendationResponse], {
		name: 'getRecommendationsForMusic'
	})
	async getRecommendations(
		@Authorized('id') userId: string,
		@Args('limit') limit: number
	) {
		return this.recommendationService.getRecommendations(userId, limit)
	}

	@Authorization()
	@Query(() => [MixModel], { name: 'getUserRecommendations' })
	async getMixes(@Authorized() user: User) {
		return this.recommendationService.getUserRecommendations(user)
	}

	@Authorization()
	@Query(() => MixModel, { name: 'getMixPlaylists' })
	async getMixPlaylist(
		@Authorized() user: User,
		@Args('mixId') mixId: string
	) {
		return this.recommendationService.getMixPlaylist(user, mixId)
	}

	@Authorization()
	@Mutation(() => Boolean, { name: 'saveMixPlaylist' })
	async saveMix(@Authorized() user: User, @Args('mixId') mixId: string) {
		return this.recommendationService.saveMixPlaylist(user, mixId)
	}
}
