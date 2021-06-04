/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { userSchema } from './users.model';
import { UsersService } from './users.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'users', schema:userSchema}])],
  providers: [UsersService],
  controllers:[UserController]
})
export class UsersModule {}
