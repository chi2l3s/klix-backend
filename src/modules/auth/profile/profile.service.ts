import { ConflictException, Injectable } from '@nestjs/common'
import * as Upload from 'graphql-upload/Upload.js'
import * as sharp from 'sharp'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { StorageService } from '../../libs/storage/storage.service'

import { ChangeInfoInput } from './inputs/change-info.input'

@Injectable()
export class ProfileService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly storageService: StorageService
	) {}

	async changeAvatar(user: User, file: Upload) {
		if (user.avatar) {
			await this.storageService.remove(user.avatar)
		}

		const chunks: Buffer[] = []

		for await (const chunk of file.createReadStream()) {
			chunks.push(chunk)
		}

		const buffer = Buffer.concat(chunks)

		const fileName = `/users/${user.username}.webp`

		const processedBuffer = await sharp(buffer)
			.resize(512, 521)
			.webp()
			.toBuffer()

		await this.storageService.upload(
			processedBuffer,
			fileName,
			'image/webp'
		)

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				avatar: fileName
			}
		})

		return true
	}

	async removeAvatar(user: User) {
		if (!user.avatar) {
			return
		}

		await this.storageService.remove(user.avatar)

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				avatar: null
			}
		})

		return true
	}

	async changeInfo(user: User, input: ChangeInfoInput) {
		const { username, firstName, lastName, bio, dateOfBirth } = input

		const usernameExists = await this.prismaService.user.findUnique({
			where: {
				id: user.id
			}
		})

		if (usernameExists && username !== user.username) {
			throw new ConflictException('Это имя пользователя уже занято')
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				username,
				firstName,
				lastName,
				bio,
				dateOfBirth
			}
		})

		return true
	}
}
