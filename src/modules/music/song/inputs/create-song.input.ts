import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class EditSongInput {
	@Field(() => String)
	id: string

	@Field(() => String)
	title: string

	@Field(() => [String])
	artists: string[]

	@Field(() => [String])
	genres: string[]
}
