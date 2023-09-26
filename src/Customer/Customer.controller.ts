import { Controller, Get, Post, Patch, Delete, Body, Param, ValidationPipe } from "@nestjs/common";
import { CustomerService } from "./Customer.service";
import { Customer } from "./Customer.interface";
import { CreateCustomerDTO } from "./CustomerCreate.dto";
import { UpdateCustomerDTO } from "./CustomerUpdate.dto";

@Controller("customers")
export class CustomerController {
    constructor( private readonly customerservice: CustomerService ){}
    @Get()
    getAll(): Promise<Customer[]>{
        return this.customerservice.getAll();
    }
    @Post()
    create(@Body(ValidationPipe) createcustomerdto: CreateCustomerDTO): Promise<Customer>{
        return this.customerservice.create(createcustomerdto);
    }
    @Get(":id")
    getOne(@Param("id") id:string):Promise<Customer>{
        return this.customerservice.findOne(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) updatecustomerdto: UpdateCustomerDTO): Promise<Customer>{
            return this.customerservice.update(id,updatecustomerdto);
        }
    @Delete(":id")
    remove(@Param("id") id:string):Promise<Customer>{
        return this.customerservice.remove(id);
    }
}