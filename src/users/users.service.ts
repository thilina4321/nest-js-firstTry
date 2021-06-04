/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './users.model';
import * as jwt from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private User: Model<User>) {}

    async singupUser(email: string, password: string) {
    const user = await this.User.create({ email, password });
    return user as User;
  }

  async loginUser(email: string, password: string) {
    try {
      const user = (await this.User.findOne({ email })) as User;

      if (!user) {
        throw new NotFoundException();
      }

      if (user.password != password) {
        throw new UnauthorizedException();
      }
      
      const token =  jwt.sign({ id: user.id }, 'jsonwebtoken');
      return token;
    } catch (error) {
      return error.message;
    }
  }

  sayHello(){
      return 'say hello'
  }

  
}
