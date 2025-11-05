import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { ChatService } from './chat.service'
import { SendMessageInput } from './inputs/send-message.input'
import { ChatModel } from './models/chat.model'
import { MessageModel } from './models/message.model'

@Resolver('Chat')
export class ChatResolver {
	private readonly pubSub: PubSub

	constructor(private readonly chatService: ChatService) {
		this.pubSub = new PubSub()
	}

	@Authorization()
	@Query(() => [ChatModel], { name: 'getUserChats' })
	public async chats(@Authorized('id') userId: string) {
		return this.chatService.chats(userId)
	}

	@Authorization()
	@Query(() => ChatModel, { name: 'getChatById' })
	public async chat(
		@Args('chatId') chatId: string,
		@Authorized() user: User
	) {
		return this.chatService.chat(chatId, user)
	}

	@Authorization()
	@Mutation(() => MessageModel, { name: 'sendMessage' })
	public async sendMessage(
		@Args('data') input: SendMessageInput,
		@Authorized() user: User
	) {
		const message = await this.chatService.sendMessage(input, user)

		await this.pubSub.publish(`MESSAGE_SENT_${input.chatId}`, {
			messageSent: message
		})

		return message
	}

	@Subscription(() => MessageModel, {
		filter: (payload, variables) => {
			return payload.messageSent.chatId === variables.chatId
		}
	})
	public async messageSent(@Args('chatId') chatId: string) {
		return this.pubSub.asyncIterableIterator(`MESSAGE_SENT_${chatId}`)
	}
}
