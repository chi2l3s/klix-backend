import { Field, ObjectType } from "@nestjs/graphql";
import { LineModel } from "../inputs/song-lyrics-input";

@ObjectType()
export class LyricsModel {
    @Field(() => [LineModel])
    lines: LineModel[]
}