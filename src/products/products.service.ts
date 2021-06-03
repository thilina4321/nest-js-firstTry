/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{

    constructor(@InjectModel('products') private Product:Model<Product>){}


    async addProduct( name:string, price:number){
        const newProduct = await this.Product.create({name, price})
        return newProduct as Product;
    }

    async getProduct(id:any){
        return await this.Product.findById(id) as Product
    }

    async getAllProducts(){
        return await this.Product.find().exec() as Product[]
    }

    async updateProduct(id, val:any){
        const updatedProduct = await this.Product.
        findByIdAndUpdate(id, {...val}, {new:true})
        return updatedProduct as Product
    }

    async deleteProduct(id:any){
        const deletedProduct = await this.Product.findByIdAndDelete(id)
        return deletedProduct as Product
    }
}