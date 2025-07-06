import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IS_DEV_ENV } from '../shared/utils/is-dev.util';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { getGraphqlConfig } from './config/graphql.config';
import { RedisModule } from './redis/redis.module';
import { PrismaModule } from './prisma/prisma.module';
import { SessionModule } from '../modules/auth/session/session.module';
import { AccountModule } from '../modules/auth/account/account.module';
import { MailModule } from '../modules/libs/mail/mail.module';
import { PasswordRecoveryModule } from '../modules/auth/password-recovery/password-recovery.module';
import { VerificationModule } from '../modules/auth/verification/verification.module';
import { ProfileModule } from '../modules/auth/profile/profile.module';
import { StorageModule } from '../modules/libs/storage/storage.module';
import { NotificationModule } from '../modules/notification/notification.module';
import { ArtistModule } from '../modules/music/artist/artist.module';
import { SongModule } from '../modules/music/song/song.module';
import { AlbumModule } from '../modules/music/album/album.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getGraphqlConfig,
      inject: [ConfigService]
    }),
    RedisModule,
    PrismaModule,
    SessionModule,
    AccountModule,
    MailModule,
    PasswordRecoveryModule,
    VerificationModule,
    ProfileModule,
    StorageModule,
    NotificationModule,
    ArtistModule,
    SongModule,
    AlbumModule
  ],
})
export class CoreModule {}
