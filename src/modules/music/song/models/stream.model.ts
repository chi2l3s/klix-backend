import { Field, ObjectType } from "@nestjs/graphql";
import { SongModel } from "./song.model";

@ObjectType() 
export class StreamModel {
    @Field(() => String)
    url: string

    @Field(() => SongModel)
    song: SongModel
}