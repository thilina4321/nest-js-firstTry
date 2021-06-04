/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersGuard } from "./users.guard";
import { User } from "./users.model";
import { UsersService } from "./users.service";

@Controller('user')
export class UserController{

    constructor(private userService:UsersService){}

    @Post('signup')
    async createUser(@Body() user:User){
        return await this.userService.singupUser(user.email, user.password)
    }

    @Post('login')
    async loginUser(@Body() user:User){
        return await this.userService.loginUser(user.email, user.password)
    }

    @UseGuards(UsersGuard)
    @Get()
    sayHello(){
        return this.userService.sayHello()
    }
}