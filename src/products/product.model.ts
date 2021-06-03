/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name:{type:String},
    price:Number
})

export interface Product {
  id: number;
  name: string;
  price: number;
}
