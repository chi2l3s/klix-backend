import { $Enums, Playlist, PlaylistType } from "@/prisma/generated";
import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { SongModel } from "../../song/models/song.model";
import { UserModel } from "@/src/modules/auth/account/models/user.model";

registerEnumType(PlaylistType, {
    name: 'PlaylistType'
})

@ObjectType()
export class PlaylistModel implements Playlist {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => PlaylistType)
    type: PlaylistType;

    @Field(() => String)
    coverUrl: string;

    @Field(() => [SongModel])
    songs: SongModel[];

    @Field(() => UserModel)
    creator: UserModel;

    @Field(() => String)
    creatorId: string;

    @Field(() => [UserModel])
    users: UserModel[];

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}