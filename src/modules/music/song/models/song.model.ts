import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { $Enums, Song, SongStatus } from '@/prisma/generated'

import { ArtistModel } from '../../artist/models/artist.model'
import { AlbumModel } from '../../album/models/album.model'
import { UserModel } from '@/src/modules/auth/account/models/user.model'

registerEnumType(SongStatus, {
	name: 'SongStatus'
})

@ObjectType()
export class SongModel implements Song {
	@Field(() => String)
	id: string

	@Field(() => String)
	title: string

	@Field(() => String, { nullable: true })
	albumId: string

	@Field(() => AlbumModel)
	album: AlbumModel

	@Field(() => [ArtistModel])
	artists: ArtistModel[]

	@Field(() => Number)
	duration: number

	@Field(() => String)
	audioUrl: string

	@Field(() => [String])
	genres: string[]

	@Field(() => String, { nullable: true })
	coverUrl: string

	@Field(() => SongStatus)
	status: SongStatus;

	@Field(() => String, { nullable: true })
	lyrics: string | null;

	@Field(() => UserModel)
	uploader: UserModel

	@Field(() => String)
	uploaderId: string;

	@Field(() => [UserModel])
	users: UserModel[]

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
