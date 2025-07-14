import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { IsNumber } from 'class-validator'

@InputType()
export class LineInput {
	@Field(() => Number)
	start: number

	@Field(() => String)
	text: string
}

@ObjectType()
export class LineModel {
	@Field(() => Number)
	start: number

	@Field(() => String)
	text: string
}

@InputType()
export class SongLyricsInput {
	@Field(() => ID)
	id: string

	@Field(() => [LineInput])
	lines: LineInput[]
}
