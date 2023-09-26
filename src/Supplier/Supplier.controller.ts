import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { SupplierService } from "./Supplier.service";
import { Supplier } from "./Supplier.interface";
import { CreateSupplierDTO } from "./SupplierCreate.dto";
import { UpdateSupplierDTO } from "./SupplierUpdate.dto";

@Controller("supplier")
export class SupplierController {
    constructor( private readonly supplierservice:SupplierService ){}
    @Get()
    getAll():Promise<Supplier[]>{
        return this.supplierservice.getAll();
    }
    @Post()
    create(@Body(ValidationPipe) createsupplierdto:CreateSupplierDTO): Promise<Supplier>{
        return this.supplierservice.create(createsupplierdto)
    }
    @Get(":id")
    findOne(@Param("id") id:string):Promise<Supplier>{
        return this.supplierservice.findOne(id);
    }

    @Patch(":id")
    update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            )updatesupplierdto:UpdateSupplierDTO): Promise<Supplier>{
        return this.supplierservice.update(id,updatesupplierdto);
    }
    @Delete(":id")
    remove(@Param("id") id:string): Promise<Supplier>{
        return this.supplierservice.remove(id);
    }
}