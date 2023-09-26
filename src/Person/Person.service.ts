import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PersonClass } from "./Person.schema";
import { Model } from "mongoose";
import { Person } from "./Person.interface";
import { CreatePersonDTO } from "./PersonCreate.dto";
import { UpdatePersonDTO } from "./PersonUpdate.dto";

@Injectable()
export class PersonService {
    constructor(
        @InjectModel(PersonClass.name)
        private readonly personmodel: Model<PersonClass>
    ){}
    async getAll():Promise<Person[]>{
        return await this.personmodel.find().exec()
    }
    async create(createpersondto: CreatePersonDTO): Promise<Person>{
        try{
            return await this.personmodel.create(createpersondto);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async findOne(id:string):Promise<Person>{
        try{
            return await this.personmodel.findById(id);
        }catch(error){
            throw new NotFoundException();
        }
    }

    async update( id:string, updatepersondto:UpdatePersonDTO):Promise<Person>{
        try{
            return await this.personmodel.findByIdAndUpdate(id,updatepersondto,{
                new: true
            });
        }catch(error){
            throw new NotFoundException();
        }
    }

    async remove(id:string):Promise<Person>{
        try{
            return await this.personmodel.findByIdAndRemove(id);
        }catch(error){
            throw new NotFoundException();
        }
    }
}