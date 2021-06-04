/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String
    }

})

export interface User{
    id:string,
    email:string,
    password:string
}