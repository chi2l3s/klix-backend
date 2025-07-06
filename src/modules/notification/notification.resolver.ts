import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { ChangeNotificationSettingsInput } from './inputs/change-notification-settings'
import { NotificationSettingsModel } from './models/notification-settings.model'
import { NotificationModel } from './models/notification.model'
import { NotificationService } from './notification.service'

@Resolver('Notification')
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@Authorization()
	@Query(() => Number, { name: 'getUnreadNotificationsCount' })
	async getUnreadCount(@Authorized() user: User) {
		return this.notificationService.getUnreadCount(user)
	}

	@Authorization()
	@Query(() => [NotificationModel], { name: 'getNotificationsByUser' })
	async getByUser(@Authorized() user: User) {
		return this.notificationService.getByUser(user)
	}

	@Authorization()
	@Mutation(() => NotificationSettingsModel, {
		name: 'changeNotificationSettings'
	})
	async changeSettings(
		@Authorized() user: User,
		@Args('data') input: ChangeNotificationSettingsInput
	) {
		return this.notificationService.changeSettings(user, input)
	}
}
