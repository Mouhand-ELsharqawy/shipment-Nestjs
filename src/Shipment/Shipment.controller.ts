import { Controller, Get, Post, Patch, Delete, Param, Body,ValidationPipe } from "@nestjs/common";
import { ShipmentService } from "./Shipment.service";
import { Shipment } from "./Shipment.interface";
import { CreateShipmentDTO } from "./ShipmentCreate.dto";
import { UpdateShipmentDTO } from "./ShipmentUpdate.dto";

@Controller("shipment")
export class ShipmentController {
    constructor( private readonly shipmentservice: ShipmentService ){}
    @Get()
    getAll():Promise<Shipment[]>{
        return this.shipmentservice.getAll();
    }

    @Post()
    create(@Body(ValidationPipe) createshipmentdto:CreateShipmentDTO):Promise<Shipment>{
        return this.shipmentservice.create(createshipmentdto);
    }

    @Get(":id")
    findOne(@Param("id") id:string): Promise<Shipment>{
        return this.shipmentservice.findOne(id);
    }
    @Patch(":id")
    update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateshipmentdto:UpdateShipmentDTO):Promise<Shipment>{
                return this.shipmentservice.update(id,updateshipmentdto)
    }
    @Delete(":id")
    remove(@Param("id") id:string):Promise<Shipment>{
        return this.shipmentservice.remove(id)
    }
}