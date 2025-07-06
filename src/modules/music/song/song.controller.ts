import { Controller, Get, Param, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";
import { SongService } from "./song.service";

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('stream/:id')
  async streamAudio(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    await this.songService.streamAudio(id, req, res);
  }
}