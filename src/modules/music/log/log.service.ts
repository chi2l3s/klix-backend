import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
    public constructor(private readonly prismaService: PrismaService) {}

    async logListen(userId: string, songId: string) {
        const exists = await this.prismaService.listening.findFirst({
            where: {
                userId,
                songId
            }
        })

        if (exists) {
            return true
        }

        await this.prismaService.listening.create({
            data: {
                userId,
                songId
            }
        })

        return true
    }
}
