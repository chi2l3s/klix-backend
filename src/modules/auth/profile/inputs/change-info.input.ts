import { Field, InputType } from '@nestjs/graphql'
import { IsDate, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator'

@InputType()
export class ChangeInfoInput {
	@Field(() => String)
	@IsString()
	@IsNotEmpty()
	@Matches(/^[a-zA-Z0-9_]{3,32}$/, {
		message:
			'Имя пользователя может содержать только буквы английского алфавита, цифры и "_", длина от 3 до 32 символов.'
	})
	username: string

	@Field(() => String)
    @IsString()
	@IsNotEmpty()
	firstName: string

	@Field(() => String)
    @IsString()
	@IsNotEmpty()
	lastName: string

	@Field(() => String, { nullable: true })
    @IsString()
	@IsOptional()
	bio: string

	@Field(() => Date)
    @IsDate()
    @IsNotEmpty()
	dateOfBirth?: Date
}
