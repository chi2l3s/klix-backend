import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.controller';

@Module({
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
