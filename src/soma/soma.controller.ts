import { Controller, Body, Post } from '@nestjs/common';
import { NumerosDto } from './dto/soma.dto';
import { SomaService } from './soma.service';

@Controller()
export class SomaController {
  constructor(private service: SomaService) {}

  @Post('create-soma')
  create(): number {
    return this.service.create();
  }
}
