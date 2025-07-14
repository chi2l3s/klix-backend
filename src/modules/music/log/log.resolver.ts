import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { LogService } from './log.service'

@Resolver('Log')
export class LogResolver {
	constructor(private readonly logService: LogService) {}

	@Authorization()
	@Mutation(() => Boolean, { name: 'logListeningMusic' })
	async logListen(
		@Authorized('id') userId: string,
		@Args('songId') songId: string
	) {
    return this.logService.logListen(userId, songId)
  }
}
