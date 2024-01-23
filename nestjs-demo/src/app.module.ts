import { Module } from '@nestjs/common';
import { BookController } from './app.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule is initialized');
  }
}
