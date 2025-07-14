import { Recommendation } from "@/prisma/generated";
import { UserModel } from "@/src/modules/auth/account/models/user.model";
import { Field, ObjectType } from "@nestjs/graphql";
import { SongModel } from "../../song/models/song.model";

@ObjectType()
export class RecommendationResponse {
    @Field(() => String)
    song_id: string

    @Field(() => Number)
    score: number
}

@ObjectType()
export class RecomendationsRequest implements Recommendation {
    @Field(() => String)
    id: string;

    @Field(() => Number)
    score: number;

    @Field(() => SongModel)
    song: SongModel

    @Field(() => String)
    songId: string;

    @Field(() => UserModel)
    user: UserModel

    @Field(() => String)
    userId: string;

    @Field(() => Date)
    createdAt: Date;
}