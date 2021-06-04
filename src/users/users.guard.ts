/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { User } from './users.model';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class UsersGuard implements CanActivate {

  constructor(@InjectModel('users') private User:Model<User>){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const res = context.switchToHttp().getRequest() as Request
    const token = res.headers['authorization']

    try {
      const decordedToken = jwt.verify(token, 'jsonwebtoken')
      return this.User.findById(decordedToken['id']).then(user=>{
        if(!user){
          return false
        }
        return true
      }).catch(()=>  false)
      
    } catch (_) {
      return false
    }
    

    
    
    
  }
}
