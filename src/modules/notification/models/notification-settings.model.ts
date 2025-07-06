import { Field, ObjectType } from '@nestjs/graphql'

import type { NotificationSettings } from '@/prisma/generated'
import { UserModel } from '@/src/modules/auth/account/models/user.model'

@ObjectType()
export class NotificationSettingsModel implements NotificationSettings {
	@Field(() => String)
	id: string

	@Field(() => Boolean)
	webNotifications: boolean

	@Field(() => UserModel)
	user: UserModel

	@Field(() => String)
	userId: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
