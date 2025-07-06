import {
	ConflictException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { hash, verify } from 'argon2'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { VerificationService } from '../verification/verification.service'

import { ChangeEmailInput } from './inputs/change-email.input'
import { ChangePasswordInput } from './inputs/change-password.input'
import { CreateUserInput } from './inputs/create-user.input'

@Injectable()
export class AccountService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly verificationService: VerificationService
	) {}

	async getMe(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			},
			include: {
				notificationSettings: true
			}
		})

		return user
	}

	public async create(input: CreateUserInput) {
		const { username, email, password, firstName, lastName, dateOfBirth } =
			input

		const isUsernameExists = await this.prismaService.user.findUnique({
			where: {
				username
			}
		})

		if (isUsernameExists) {
			throw new ConflictException('Это имя пользователя уже занято')
		}

		const isEmailExists = await this.prismaService.user.findUnique({
			where: {
				email
			}
		})

		if (isEmailExists) {
			throw new ConflictException('Эта почта уже занята')
		}

		const user = await this.prismaService.user.create({
			data: {
				username,
				email,
				password: await hash(password),
				firstName: firstName,
				lastName: lastName,
				dateOfBirth: dateOfBirth,
				notificationSettings: {
					create: {}
				}
			}
		})

		try {
			await this.verificationService.sendVerificationToken(user)
		} catch (err) {
			console.log('Не удалось отправить письмо')
			console.log(err)
		}

		return true
	}

	public async changeEmail(user: User, input: ChangeEmailInput) {
		const { email } = input

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				email
			}
		})

		return true
	}

	public async changePassword(user: User, input: ChangePasswordInput) {
		const { oldPassword, newPassword } = input

		const isValidPassword = await verify(user.password, oldPassword)

		if (!isValidPassword) {
			throw new UnauthorizedException('Неверный старый пароль')
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				password: await hash(newPassword)
			}
		})

		return true
	}
}
