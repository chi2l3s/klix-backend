import { PrismaService } from '@/src/core/prisma/prisma.service'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { MailService } from '../../libs/mail/mail.service'
import { generateToken } from '@/src/shared/utils/generate-token.uitl'
import { TokenType } from '@/prisma/generated'
import { getSessionMetadata } from '@/src/shared/utils/session-metadata.util'
import { Request } from 'express'
import { hash } from 'argon2'
import { ResetPasswordInput } from './inputs/reset-password.input'
import { NewPasswordInput } from './inputs/new-password.input'

@Injectable()
export class PasswordRecoveryService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly mailService: MailService,
	) {}

	public async resetPassword(
		req: Request,
		input: ResetPasswordInput,
		userAgent: string
	) {
		const { email } = input

		const user = await this.prismaService.user.findUnique({
			where: {
				email
			},
			// include: {
			// 	notificationsSettings: true
			// }
		})

		if (!user) {
			throw new NotFoundException('Пользователь не найден')
		}

		const resetToken = await generateToken(
			this.prismaService,
			user,
			TokenType.PASSWORD_RESET
		)

		const metadata = getSessionMetadata(req, userAgent)

		await this.mailService.sendPasswordResetToken(
			user.email,
			resetToken.token,
			metadata
		)

		// if (
		// 	user.notificationsSettings.telegramNotifications &&
		// 	user.telegramId
		// ) {
		// 	await this.telegramService.sendPasswordResetToken(
		// 		user.telegramId,
		// 		resetToken.token,
		// 		metadata
		// 	)
		// }

		return true
	}

	public async newPassword(input: NewPasswordInput) {
		const { password, token } = input

		const existingToken = await this.prismaService.token.findUnique({
			where: {
				token: token,
				type: TokenType.PASSWORD_RESET
			}
		})

		if (!existingToken) {
			throw new NotFoundException('Токен не найден')
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date()

		if (hasExpired) {
			throw new BadRequestException('Токен истёк')
		}

		await this.prismaService.user.update({
			where: {
				id: existingToken.userId
			},
			data: {
				password: await hash(password)
			}
		})

		await this.prismaService.token.delete({
			where: {
				id: existingToken.id,
				type: TokenType.PASSWORD_RESET
			}
		})

		return true
	}
}
