import { Module } from '@nestjs/common';

@Module({})
export class UsersModule {
  constructor() {
    console.log('Hi from UsersModule');
  }
}
