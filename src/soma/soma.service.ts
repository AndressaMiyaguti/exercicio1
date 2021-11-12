import { Injectable } from '@nestjs/common';
import { Prisma, Soma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SomaService {
  constructor(private db: PrismaService) {}
  async create(data: Prisma.SomaCreateInput): Promise<Soma> {
    const soma = await this.db.soma.create({
      data: { ...data },
    });
    return soma;
  }
}
