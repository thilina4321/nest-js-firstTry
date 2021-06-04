/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async addProducts(@Body() body:{name:string, price:number}) {
    return await this.productService.addProduct(body.name, body.price);
  }

  @Get(':id')
  getProducts(@Param('id') id:any){
      return this.productService.getProduct(id)
  }

  @Get()
  async getAllProducts(){
    return await this.productService.getAllProducts() 
  }

  @Patch(':id')
  async updateProduct(@Param('id') id:any, @Body() pro:any){
      return await this.productService.updateProduct(id, pro)
  }
  
  @Delete(':id')
  async deleteProduct(@Param('id') id:string){
      return await this.productService.deleteProduct(id)
  }

}
