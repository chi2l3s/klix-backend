import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class Line {
	@Field(() => Number)
	start: number

	@Field(() => String)
	text: string
}

@InputType()
export class SongLyricsInput {
	@Field(() => ID)
	id: string

	@Field(() => [Line])
	lines: Line[]
}
