import { Field, ObjectType } from '@nestjs/graphql'
import { Album } from '@/prisma/generated'

@ObjectType()
export class AlbumModel implements Album {
	@Field(() => String)
	id: string

	@Field(() => String)
	title: string

	@Field(() => String)
	artistId: string

	@Field(() => Date)
	releaseDate: Date

	@Field(() => String)
	coverUrl: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
} 