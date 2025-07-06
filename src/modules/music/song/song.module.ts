import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongResolver } from './song.resolver';
import { ArtistService } from '../artist/artist.service';
import { SongController } from './song.controller';

@Module({
  controllers: [SongController],
  providers: [SongResolver, SongService, ArtistService],
})
export class SongModule {}
