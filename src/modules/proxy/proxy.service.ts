import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { Response } from 'express'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class ProxyService {
	constructor(private readonly httpService: HttpService) {}

	async proxyImage(url: string, res: Response) {
		const image = await firstValueFrom(
			this.httpService.get(url, { responseType: 'arraybuffer' })
		)
        res.set('Content-Type', image.headers['content-type'])
        res.set('Access-Control-Allow-Origin', '*');
        res.send(image.data)
	}
}
