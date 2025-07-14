import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationResolver } from './recommendation.resolver';
import { HttpModule } from '@nestjs/axios';
import { PlaylistModule } from '../playlist/playlist.module';

@Module({
  imports: [HttpModule, PlaylistModule],
  providers: [RecommendationResolver, RecommendationService],
})
export class RecommendationModule {}
