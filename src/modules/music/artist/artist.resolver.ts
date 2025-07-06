import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { CreateArtistInput } from './inputs/create-artist.input';
import { Authorization } from '@/src/shared/decorators/auth.decorator';
import { ArtistModel } from './models/artist.model';
import { FiltersInput } from '../song/inputs/filters.input';

@Resolver('Artist')
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}

  @Authorization()
  @Mutation(() => ArtistModel, { name: 'createArtist' })
  async createArtist(@Args('data') input: CreateArtistInput) {
    return this.artistService.createArtist(input)
  }

  @Query(() => [ArtistModel], { name: 'getAllArtists' })
  async getAll() {
    return this.artistService.getArtists()
  }

  @Query(() => [ArtistModel], { name: 'findArtistsByTerm' })
  async findArtists(@Args('filters') filters: FiltersInput) {
    return this.artistService.findArtists(filters)
  }

}
