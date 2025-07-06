import {
	ArgumentMetadata,
	BadRequestException,
	Injectable,
	PipeTransform
} from '@nestjs/common'
import { ReadStream } from 'fs'
import { parseStream } from 'music-metadata'

import { validateFileFormat, validateFileSize } from '../utils/file.util'

@Injectable()
export class MusicValidationPipe implements PipeTransform {
	async transform(value: any, metadata: ArgumentMetadata) {
		if (!value?.filename || !value?.createReadStream) {
			throw new BadRequestException('Файл не загружен')
		}

		const { filename, createReadStream } = value

		const title = filename.split('.')[0]

		const fileStream = createReadStream() as ReadStream

		const allowedFormats = ['mp4', 'wav', 'mpeg', 'mp3']
		const isFileFormatValid = validateFileFormat(filename, allowedFormats)

		if (!isFileFormatValid) {
			throw new BadRequestException('Недопустимый формат файла')
		}

		const isFileSizeValid = await validateFileSize(
			fileStream,
			20 * 1024 * 1024
		)

		if (!isFileSizeValid) {
			throw new BadRequestException('Размер файла превышает 20 МБ')
		}

		fileStream.pause()

		const durationStream = createReadStream() as ReadStream

		let duration: number | undefined
		let cover
		try {
			const metadataResult = await parseStream(
				durationStream,
				{ mimeType: undefined },
				{ duration: true }
			)
			cover = metadataResult.common.picture[0].data
			duration = metadataResult.format.duration
		} catch (err) {
			throw new BadRequestException(
				'Не удалось определить длительность аудио'
			)
		} finally {
			durationStream.pause()
		}

		return {
			...value,
			duration,
			title,
			coverBuffer: cover
		}
	}
}
