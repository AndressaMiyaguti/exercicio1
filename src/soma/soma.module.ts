import { Module } from '@nestjs/common';
import { SomaController } from './soma.controller';
import { SomaService } from './soma.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SomaController],
  providers: [SomaService, PrismaService],
})
export class SomaModule {}
