import { Field, ObjectType } from '@nestjs/graphql'

import { Notification } from '@/prisma/generated'

import { UserModel } from '../../auth/account/models/user.model'

@ObjectType()
export class NotificationModel implements Notification {
	@Field(() => String)
	id: string

	@Field(() => String)
	message: string

	@Field(() => Boolean)
	isRead: boolean

	@Field(() => UserModel)
	user: UserModel

	@Field(() => String)
	userId: string

	@Field(() => String)
	userAvatar: string

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}
