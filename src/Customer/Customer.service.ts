import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel  } from "@nestjs/mongoose";
import { CustomerClass } from "./Customer.schema";
import { Model } from "mongoose";
import { Customer } from "./Customer.interface";
import { CreateCustomerDTO } from "./CustomerCreate.dto";
import { UpdateCustomerDTO } from "./CustomerUpdate.dto";

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(CustomerClass.name)
        private readonly customermodel:Model<CustomerClass>
    ){}

    async getAll():Promise<Customer[]>{
        return await this.customermodel.find().exec();
    }
    
    async create(createcustomerdto: CreateCustomerDTO):Promise<Customer>{
        try{
            return await this.customermodel.create(createcustomerdto);
        }catch(error){
            throw new NotFoundException()
        }
    }

    async findOne( id:string ):Promise<Customer>{
        try{
            return await this.customermodel.findById(id)
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update( id:string ,updatecustomerdto: UpdateCustomerDTO):Promise<Customer>{
        try{
            return await this.customermodel.findByIdAndUpdate(id, updatecustomerdto ,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string): Promise<Customer>{
        try{
            return await this.customermodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}