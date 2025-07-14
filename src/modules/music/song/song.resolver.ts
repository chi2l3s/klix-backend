import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'
import { FileValidationPipe } from '@/src/shared/pipes/file-validation.pipe'
import { MusicValidationPipe } from '@/src/shared/pipes/music-validations.pipes'

import { FiltersInput } from './inputs/filters.input'
import { SongModel } from './models/song.model'
import { UploadSongModel } from './models/upload-song.model'
import { SongService } from './song.service'
import { EditSongInput } from './inputs/create-song.input'
import { StreamModel } from './models/stream.model'
import { SongLyricsInput } from './inputs/song-lyrics-input'
import { LyricsModel } from './models/lyrics.model'

@Resolver('Song')
export class SongResolver {
	constructor(private readonly songService: SongService) {}

	@Authorization()
	@Mutation(() => Boolean, { name: 'uploadSong' })
	async uploadSong(
		@Authorized() user: User,
		@Args('audio', { type: () => GraphQLUpload }, MusicValidationPipe)
		audio: Upload
	) {
		return this.songService.uploadSong(user, audio)
	}

	@Authorization()
	@Query(() => [SongModel], { name: 'getFavoriteMusic' })
	async getFavorites(@Authorized() user: User, @Args('filters') filters: FiltersInput) {
		return this.songService.getFavorites(user, filters)
	}

	@Authorization()
	@Mutation(() => Boolean, { name: 'addSongLyrics' })
	async addLyrics(@Args('data') input: SongLyricsInput) {
		return this.songService.addLyrics(input)
	}

	@Query(() => LyricsModel, { name: "getLyricsById" })
	async getLyricsById(@Args('id') id: string) {
		return this.songService.getLyricsById(id)
	}

	@Authorization()
	@Mutation(() => String, { name: 'uploadCover' })
	async uploadCover(
		@Args('cover', { type: () => GraphQLUpload }, FileValidationPipe)
		cover: Upload
	) {
		return this.songService.uploadCover(cover)
	}

	@Query(() => SongModel, { name: 'getSongById' })
	async getById(@Args('id') id: string) {
		return this.songService.getSongById(id)
	}

	@Query(() => [SongModel], { name: 'getSongs' })
	async getSongs(@Args('data') input: FiltersInput) {
		return this.songService.getSongs(input)
	}

	@Query(() => StreamModel, { name: 'getSongStreamUrl' })
	async getSongStreamUrl(@Args('id') id: string) {
		const song = await this.songService.getSongById(id)

		return {
			url: `http://localhost:4000/songs/stream/${id}`,
			song
		}
	}

	@Authorization()
	@Mutation(() => Boolean, { name: 'ediSong' })
	async createSong(
		@Authorized() user: User,
		@Args('data') input: EditSongInput
	) {
		return this.songService.editSong(user, input)
	}

	@Authorization()
	@Mutation(() => Boolean, { name: 'saveSongToFavorite' })
	async saveSong(
		@Authorized() user: User,
		@Args('songId') songId: string
	) {
		return this.songService.saveSong(user, songId)
	}

	@Authorization()
	@Query(() => Boolean, { name: 'isSongInFavorite' })
	async isSongInFavorite(
		@Authorized() user: User,
		@Args('songId') songId: string
	) {
		return this.songService.isSongInFavorite(user, songId)
	}
}
