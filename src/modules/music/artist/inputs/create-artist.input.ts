import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateArtistInput {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    name: string
}