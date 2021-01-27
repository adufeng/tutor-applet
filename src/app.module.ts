import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [DbModule,TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
