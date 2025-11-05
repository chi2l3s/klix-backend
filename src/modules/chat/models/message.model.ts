import { Message } from "@/prisma/generated";
import { UserModel } from "../../auth/account/models/user.model";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MessageModel implements Message {
    @Field(() => String)
    id: string;

    @Field(() => String)
    content: string;

    @Field(() => String)
    chatId: string;

    @Field(() => UserModel)
    author: UserModel

    @Field(() => String)
    authorId: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}