import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SupplierClass } from "./Supplier.schema";
import { Model } from "mongoose";
import { Supplier } from "./Supplier.interface";
import { CreateSupplierDTO } from "./SupplierCreate.dto";
import { UpdateSupplierDTO } from "./SupplierUpdate.dto";

@Injectable()
export class SupplierService {
    constructor(
        @InjectModel(SupplierClass.name)
        private readonly suppliermodel: Model<SupplierClass>
    ){}

    async getAll(): Promise<Supplier[]>{
        return await this.suppliermodel.find().exec();
    }

    async create(createsupplierdto: CreateSupplierDTO): Promise<Supplier>{
        try{
            return await this.suppliermodel.create(createsupplierdto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async findOne(id:string): Promise<Supplier>{
        try{
            return await this.suppliermodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update(id:string, updatesupplierdto: UpdateSupplierDTO): Promise<Supplier>{
        try{
            return await this.suppliermodel.findByIdAndUpdate(id, updatesupplierdto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string):Promise<Supplier>{
        try{
            return await this.suppliermodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}