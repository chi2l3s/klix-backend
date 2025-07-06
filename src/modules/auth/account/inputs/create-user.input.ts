import { Field, InputType, GraphQLISODateTime } from '@nestjs/graphql'
import {
	IsDate,
	IsDateString,
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
	MinLength
} from 'class-validator'

@InputType()
export class CreateUserInput {
	@Field()
	@IsString({ message: 'Имя пользователя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя пользователя не может быть пустым.' })
	@Matches(/^[a-zA-Z0-9_]{3,32}$/, {
		message:
			'Имя пользователя может содержать только буквы английского алфавита, цифры и "_", длина от 3 до 32 символов.'
	})
	username: string

	@Field()
	@IsString({ message: 'Email должен быть строкой.' })
	@IsNotEmpty({ message: 'Email не может быть пустым.' })
	@IsEmail(
		{},
		{ message: 'Email должен быть валидным адресом электронной почты.' }
	)
	email: string

	@Field()
	@IsString({ message: 'Пароль должен быть строкой.' })
	@IsNotEmpty({ message: 'Пароль не может быть пустым.' })
	@MinLength(8, { message: 'Пароль должен содержать минимум 8 символов.' })
	@Matches(/^(?=.*[A-Z])(?=.*\d)[^\s]+$/, {
		message:
			'Пароль должен содержать хотя бы одну заглавную латинскую букву и одну цифру. Допустимы любые символы, кроме пробела.'
	})
	password: string

	@Field()
	@IsString({ message: 'Имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя не может быть пустым.' })
	firstName: string

	@Field()
	@IsString({ message: 'Фамилия должна быть строкой.' })
	@IsNotEmpty({ message: 'Фамилия не может быть пустой.' })
	lastName: string

	@Field(() => Date, { nullable: true })
	@IsOptional()
	@IsDate()
	dateOfBirth?: Date
}
