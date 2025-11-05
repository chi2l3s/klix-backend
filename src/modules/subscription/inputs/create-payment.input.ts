import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { PaymentMethodsEnum } from "nestjs-yookassa";

registerEnumType(PaymentMethodsEnum, {
    name: 'PaymentMethodsEnum'
}) 

@InputType()
export class CreatePaymentInput {
    @Field(() => PaymentMethodsEnum)
    method: PaymentMethodsEnum
}