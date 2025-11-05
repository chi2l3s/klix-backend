import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ConfirmationModel {
    @Field(() => String)
	type: string

    @Field(() => String)
    confirmationUrl: string
}

@ObjectType()
export class PaymentDetailsModel {
    @Field(() => String)
	id: string

    @Field(() => String)
    status: string

    @Field(() => String)
    description: string

    @Field(() => ConfirmationModel)
    confirmation: ConfirmationModel
}