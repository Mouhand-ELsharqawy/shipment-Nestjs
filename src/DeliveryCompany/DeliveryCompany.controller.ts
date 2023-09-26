import { Controller, Get, Post, Patch, Delete, ValidationPipe, Body, Param } from "@nestjs/common";
import { DeliveryCompanyService } from "./DeliveryCompany.service";
import { DeliveryCompany } from "./DeliveryCompany.interface";
import { CreateDeliveryCompanyDTO } from "./DeliveryCompanyCreate.dto";
import { UpdateDeliveryCompanyDTO } from "./DeliveryCompanyUpdate.dto";

@Controller("delivery")
export class DeliveryCompanyController {
    constructor( private readonly deliverycompanyservice:DeliveryCompanyService ){}
    @Get()
    getAll():Promise<DeliveryCompany[]>{
        return this.deliverycompanyservice.getAll();
    }

    @Post()
    create(@Body(
        ValidationPipe
        ) createdeliverycompanydto: CreateDeliveryCompanyDTO): Promise<DeliveryCompany>{
            return this.deliverycompanyservice.create(createdeliverycompanydto)
        }
    @Get(":id")
    findOne(@Param("id") id:string):Promise<DeliveryCompany>{
        return this.deliverycompanyservice.findOne(id);
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body(
        ValidationPipe
        ) updatedeliverycompanydto: UpdateDeliveryCompanyDTO):Promise<DeliveryCompany>{

            return this.deliverycompanyservice.update(id,updatedeliverycompanydto)
        
        }
    @Delete(":id")
    remove(@Param("id") id:string):Promise<DeliveryCompany>{
        return this.deliverycompanyservice.remove(id);
    }
}