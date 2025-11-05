import { Chat, ChatType } from "@/prisma/generated";
import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { MessageModel } from "./message.model";

registerEnumType(ChatType, {
    name: 'ChatType'
})

@ObjectType()
export class ChatModel implements Chat {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => ChatType)
    type: ChatType;

    @Field(() => [MessageModel])
    messages: MessageModel[]

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}