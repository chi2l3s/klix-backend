import { Args, Mutation, Resolver } from '@nestjs/graphql'
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'
import { FileValidationPipe } from '@/src/shared/pipes/file-validation.pipe'

import { CreatePlaylistInput } from './inputs/create-playlist.input'
import { PlaylistService } from './playlist.service'

@Resolver('Playlist')
export class PlaylistResolver {
	constructor(private readonly playlistService: PlaylistService) {}

	@Authorization()
	@Mutation(() => Boolean, { name: 'createPlaylist' })
	async create(
		@Authorized() user: User,
		@Args('data') input: CreatePlaylistInput
	) {
		return this.playlistService.create(user, input)
	}

	@Authorization()
	@Mutation(() => String, { name: 'uploadPlaylistCover' })
	async uploadCover(
		@Args('cover', { type: () => GraphQLUpload }, FileValidationPipe)
		cover: Upload
	) {
		return this.playlistService.uploadCover(cover)
	}
}
