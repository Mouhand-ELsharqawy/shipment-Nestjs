import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OrderClass } from "./Order.schema";
import { Model } from "mongoose";
import { Order } from "./Order.interface";
import { CreateOrderDTO } from "./OrderCreate.dto";
import { UpdateOrderDTO } from "./OrderUpdate.dto";

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(OrderClass.name)
        private readonly ordermodel:Model<OrderClass>
    ){}

    async getAll(): Promise<Order[]>{
        return await this.ordermodel.find().exec();
    }

    async create(createorderdto: CreateOrderDTO): Promise<Order>{
        try{
            return await this.ordermodel.create(createorderdto);
        }catch(error){
            throw new NotFoundException();
        }
    }
    async findOne(id:string):Promise<Order>{
        try{
            return await this.ordermodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string , updateorderdto: UpdateOrderDTO):Promise<Order>{
        try{
            return await this.ordermodel.findByIdAndUpdate(id,updateorderdto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string):Promise<Order>{
        try{
            return await this.ordermodel.findByIdAndRemove(id)
        }catch(error){
            throw new NotFoundException();
        }
    }
}