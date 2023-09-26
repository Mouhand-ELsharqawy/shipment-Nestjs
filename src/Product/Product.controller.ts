import { Controller, Get, Post, Patch, Delete, Param, Body,ValidationPipe } from "@nestjs/common";
import { ProductService } from "./Product.service";
import { Product } from "./Product.interface";
import { CreateProductDto } from "./ProductCreate.dto";
import { UpdateProductDTO } from "./ProductUpdate.dto";

@Controller("product")
export class ProductController {
    constructor( private readonly productservice:ProductService ){}
    @Get()
    getAll():Promise<Product[]>{
        return this.productservice.getAll();
    }
    @Post()
    create(@Body(ValidationPipe) createproductdto: CreateProductDto): Promise<Product>{
        return this.productservice.create(createproductdto)
    }
    @Get(":id")
    findOne(@Param("id") id:string):Promise<Product>{
        return this.productservice.findOne(id);
    }
    @Patch(":id")
    update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateproductdto:UpdateProductDTO):Promise<Product>{
                return this.productservice.update(id,updateproductdto);
    }
    @Delete(":id")
    remove(@Param("id") id:string):Promise<Product>{
        return this.productservice.remove(id);
    }

}