/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./product.model";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports:[MongooseModule.forFeature([{name:'products', schema:ProductSchema}])],
    providers:[ProductsService],
    controllers:[ProductsController]
})

export class ProductsModule{}