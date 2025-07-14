import { Field, ObjectType } from '@nestjs/graphql'

import { RecommendationPlaylist } from '@/prisma/generated'
import { UserModel } from '@/src/modules/auth/account/models/user.model'
import { RecomendationsRequest } from './recommendation.model' 

@ObjectType()
export class MixModel implements RecommendationPlaylist {
	@Field(() => String)
	id: string

	@Field(() => String)
	title: string

    @Field(() => [RecomendationsRequest])
    recommendations: RecomendationsRequest[]

	@Field(() => String)
	description: string

	@Field(() => UserModel)
	user: UserModel

	@Field(() => String)
	userId: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
