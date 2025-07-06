import { Album, Artist, Song } from "@/prisma/generated";
import { Field, ObjectType } from "@nestjs/graphql";
import { AlbumModel } from "../../album/models/album.model";
import { SongModel } from "../../song/models/song.model";

@ObjectType()
export class ArtistModel implements Artist {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    slug: string;

    @Field(() => String, { nullable: true })
    avatarUrl: string | null;

    @Field(() => [SongModel])
    songs: SongModel[]

    @Field(() => [AlbumModel])
    albums: AlbumModel[]

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}