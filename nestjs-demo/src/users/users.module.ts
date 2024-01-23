import { Module } from '@nestjs/common';
import { DetailsModule } from './details/details.module';

@Module({
  imports: [DetailsModule]
})
export class UsersModule {
  constructor() {
    console.log('Hi from UsersModule');
  }
}
