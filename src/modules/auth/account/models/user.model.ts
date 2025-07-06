import { Field, ObjectType } from '@nestjs/graphql'

import { User } from '@/prisma/generated'
import { NotificationSettingsModel } from '@/src/modules/notification/models/notification-settings.model'

@ObjectType()
export class UserModel implements User {
	@Field(() => String)
	id: string

	@Field(() => String)
	username: string

	@Field(() => String)
	email: string

	@Field(() => String)
	password: string

	@Field(() => String)
	firstName: string

	@Field(() => String)
	lastName: string

	@Field(() => String, { nullable: true })
	bio: string

	@Field(() => Date, { nullable: true })
	dateOfBirth: Date

	@Field(() => NotificationSettingsModel)
	notificationSettings: NotificationSettingsModel

	@Field(() => String, { nullable: true })
	avatar: string

	@Field(() => Boolean)
	isEmailVerified: boolean

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
