import { DeleteObjectCommand, DeleteObjectCommandInput, GetObjectCommand, GetObjectCommandInput, HeadObjectCommand, PutObjectCommand, PutObjectCommandInput, S3Client } from '@aws-sdk/client-s3'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Readable } from 'stream'

@Injectable()
export class StorageService {
	private readonly client: S3Client
	private readonly bucket: string

	constructor(private readonly configService: ConfigService) {
		this.client = new S3Client({
			endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'),
			region: this.configService.getOrThrow<string>('S3_REGION'),
			credentials: {
				accessKeyId:
					this.configService.getOrThrow<string>('S3_ACCESS_KEY_ID'),
				secretAccessKey: this.configService.getOrThrow<string>(
					'S3_SECRET_ACCESS_KEY'
				)
			},
			requestStreamBufferSize: 32 * 1024,
		})

		this.bucket = this.configService.getOrThrow<string>('S3_BUCKET_NAME')
	}

	async getFileMeta(key: string) {
		const command = new HeadObjectCommand({
		  Bucket: this.bucket,
		  Key: key
		});
		const response = await this.client.send(command);
		return {
		  contentLength: response.ContentLength,
		  contentType: response.ContentType
		};
	  }
	  
	  async createReadStreamWithRange(key: string, range?: string) {
		const command: GetObjectCommandInput = {
		  Bucket: this.bucket,
		  Key: key,
		  Range: range
		};
		const response = await this.client.send(new GetObjectCommand(command));
		return response.Body as Readable;
	  }

	async createReadStream(key: string) {
		const command: GetObjectCommandInput = {
			Bucket: this.bucket,
			Key: key
		}

		try {
			const response = await this.client.send(new GetObjectCommand(command))

			if (response.Body instanceof Readable) {
				return response.Body
			}

			return Readable.from(await response.Body.transformToByteArray())
		} catch(err) {
			throw err
		}
	}

	async upload(buffer: Buffer, key: string, mimetype: string) {
		const command: PutObjectCommandInput = {
			Bucket: this.bucket,
			Key: String(key),
			Body: buffer,
			ContentType: mimetype
		}

		try {
			await this.client.send(new PutObjectCommand(command))
		} catch (error) {
			throw error
		}
	}

	async remove(key: string) {
		const command: DeleteObjectCommandInput = {
			Bucket: this.bucket,
			Key: String(key)
		}

		try {
			await this.client.send(new DeleteObjectCommand(command))
		} catch (error) {
			throw error
		}
	}
}
