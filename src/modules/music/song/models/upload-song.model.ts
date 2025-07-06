import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UploadSongModel {
    @Field(() => String)
    audioUrl: string

    @Field(() => Number)
    duration: number
}