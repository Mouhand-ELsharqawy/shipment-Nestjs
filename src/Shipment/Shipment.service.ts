import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ShipmentClass } from "./Shipment.schema";
import { Model } from "mongoose";
import { Shipment } from "./Shipment.interface";
import { CreateShipmentDTO } from "./ShipmentCreate.dto";
import { UpdateShipmentDTO } from "./ShipmentUpdate.dto";

@Injectable()
export class ShipmentService {
    constructor(
        @InjectModel(ShipmentClass.name)
        private readonly shipmentmodel: Model<ShipmentClass>
    ){}
    async getAll():Promise<Shipment[]>{
        return await this.shipmentmodel.find().exec();
    }
    async create(createshipmentdto: CreateShipmentDTO): Promise<Shipment>{
        try{
            return await this.shipmentmodel.create(createshipmentdto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async findOne(id:string):Promise<Shipment>{
        try{
            return await this.shipmentmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, updateshipmentdto: UpdateShipmentDTO): Promise<Shipment>{
        try{
            return await this.shipmentmodel.findByIdAndUpdate(id,updateshipmentdto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string): Promise<Shipment>{
        try{
            return await this.shipmentmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}