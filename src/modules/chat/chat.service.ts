import { Injectable, NotFoundException } from '@nestjs/common'

import { User } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma/prisma.service'

import { SendMessageInput } from './inputs/send-message.input'

@Injectable()
export class ChatService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async chats(userId: string) {
		const chats = await this.prismaService.chat.findMany({
			where: {
				members: {
					some: {
						id: userId
					}
				}
			}
		})

		return chats
	}

	public async chat(chatId: string, user: User) {
		const chat = await this.prismaService.chat.findFirst({
			where: {
				id: chatId,
				OR: [
					{
						members: {
							some: {
								id: user.id
							}
						}
					},
					{
						type: 'GROUP'
					}
				]
			},
			include: {
				messages: {
					include: {
						author: true
					},
					orderBy: {
						createdAt: 'asc'
					}
				}
			}
		})

		if (!chat) {
			throw new NotFoundException('Чат не найден')
		}

        return chat
	}

	public async sendMessage(input: SendMessageInput, user: User) {
		const { chatId, content } = input

		const chat = await this.prismaService.chat.findUnique({
			where: { id: chatId }
		})

		if (!chat) {
			throw new NotFoundException('Чат не найден')
		}

		return await this.prismaService.message.create({
			data: {
				content,
				author: {
					connect: {
						id: user.id
					}
				},
				chat: {
					connect: {
						id: chat.id
					}
				}
			},
			include: {
				author: true
			}
		})
	}
}
