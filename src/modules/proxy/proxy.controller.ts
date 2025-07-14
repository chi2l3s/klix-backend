import { Controller, Get, Query, Res } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { Response } from 'express';

@Controller('proxy')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get('image')
  async proxyImage(@Query('url') url: string, @Res() res: Response) {
    return this.proxyService.proxyImage(url, res)
  }
}
