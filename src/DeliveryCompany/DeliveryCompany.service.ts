import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DeliveryCompanyClass } from "./DeliveryCompany.schema";
import { Model } from "mongoose";
import { DeliveryCompany } from "./DeliveryCompany.interface";
import { CreateDeliveryCompanyDTO } from "./DeliveryCompanyCreate.dto";
import { UpdateDeliveryCompanyDTO } from "./DeliveryCompanyUpdate.dto";

@Injectable()
export class DeliveryCompanyService {
    constructor(
        @InjectModel(DeliveryCompanyClass.name)
        private readonly deliverycompanymodel:Model<DeliveryCompanyClass>
    ){}
    async getAll(): Promise<DeliveryCompany[]>{
        return await this.deliverycompanymodel.find().exec()
    }

    async create( createdeliverycompanydto: CreateDeliveryCompanyDTO): Promise<DeliveryCompany>{
        try{
            return await this.deliverycompanymodel.create(createdeliverycompanydto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async findOne(id:string):Promise<DeliveryCompany>{
        try{
            return await this.deliverycompanymodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, updatedeliverycompanydto: UpdateDeliveryCompanyDTO):Promise<
    DeliveryCompany
    >{
        try{
            return await this.deliverycompanymodel.findByIdAndUpdate(id,updatedeliverycompanydto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string):Promise<DeliveryCompany>{
        try{
            return await this.deliverycompanymodel.findByIdAndRemove(id)
        }catch(error){
            throw new NotFoundException();
        }
    }
}