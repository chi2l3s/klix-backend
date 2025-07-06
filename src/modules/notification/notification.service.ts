import { Injectable } from '@nestjs/common'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { ChangeNotificationSettingsInput } from './inputs/change-notification-settings'

@Injectable()
export class NotificationService {
	constructor(private readonly prismaService: PrismaService) {}

	async getUnreadCount(user: User) {
		const count = await this.prismaService.notification.count({
			where: {
				isRead: false,
				userId: user.id
			}
		})

		return count
	}

	async getByUser(user: User) {
		await this.prismaService.notification.updateMany({
			where: {
				isRead: false,
				userId: user.id
			},
			data: {
				isRead: true
			}
		})

		const notifications = await this.prismaService.notification.findMany({
			where: {
				userId: user.id
			},
			orderBy: {
				createAt: 'desc'
			}
		})

		return notifications
	}

	async changeSettings(user: User, input: ChangeNotificationSettingsInput) {
		const { webNotifications } = input

		const notificationSettings =
			await this.prismaService.notificationSettings.update({
				where: {
					userId: user.id
				},
				data: {
					webNotifications
				}
			})

		return notificationSettings
	}
}
