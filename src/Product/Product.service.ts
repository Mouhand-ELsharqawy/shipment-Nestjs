import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProductClass } from "./Product.schema";
import { Model } from "mongoose";
import { Product } from "./Product.interface";
import { CreateProductDto } from "./ProductCreate.dto";
import { UpdateProductDTO } from "./ProductUpdate.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(ProductClass.name)
        private readonly productmodel: Model<ProductClass>
    ){}

    async getAll(): Promise<Product[]>{
        return await this.productmodel.find().exec();
    }

    async create( createproductdto: CreateProductDto):Promise<Product>{
        try{
            return await this.productmodel.create(createproductdto);
        }catch(error){
            throw new NotFoundException();
        }
    }
    async findOne(id:string): Promise<Product>{
        try{
            return await this.productmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, updateproductdto: UpdateProductDTO): Promise<Product>{
        try{
            return await this.productmodel.findByIdAndUpdate(id, updateproductdto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string):Promise<Product>{
        try{
            return await this.productmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}