import { Module } from '@nestjs/common';
import { SomaModule } from './soma/soma.module';

@Module({
  imports: [SomaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
