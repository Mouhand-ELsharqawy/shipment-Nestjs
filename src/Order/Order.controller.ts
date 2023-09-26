import { Controller, Body, Param, ValidationPipe, Get, Post, Patch, Delete } from "@nestjs/common";
import { OrderService } from "./Order.service";
import { Order } from "./Order.interface";
import { CreateOrderDTO } from "./OrderCreate.dto";
import { UpdateOrderDTO } from "./OrderUpdate.dto";

@Controller("order")
export class OrderController {
    constructor( private readonly orderservice:OrderService ){}
    @Get()
    getAll():Promise<Order[]>{
        return this.orderservice.getAll();
    }
    @Post()
    create(@Body(ValidationPipe) createorderdto:CreateOrderDTO):Promise<Order>{
        return this.orderservice.create(createorderdto)
    }
    @Get(":id")
    findOne(@Param("id") id:string): Promise<Order>{
        return this.orderservice.findOne(id);
    }

    @Patch(":id")
    update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateorderdto:UpdateOrderDTO):Promise<Order>{
                return this.orderservice.update(id,updateorderdto);
    }
    @Delete(":id")
    remove(@Param("id") id:string): Promise<Order>{
        return this.orderservice.remove(id)
    }
}