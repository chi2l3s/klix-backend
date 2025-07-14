import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class CreatePlaylistInput {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
	title: string

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    description?: string;

    @Field(() => Boolean)
    @IsNotEmpty()
    @IsBoolean()
    isPrivate: boolean

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    coverUrl?: string

    @Field(() => [String])
    @IsArray()
    songsIds: string[]
}
