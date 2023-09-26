import { Controller, Body, Param, ValidationPipe, Get, Post, Patch, Delete } from "@nestjs/common";
import { PersonService } from "./Person.service";
import { Person } from "./Person.interface";
import { CreatePersonDTO } from "./PersonCreate.dto";
import { UpdatePersonDTO } from "./PersonUpdate.dto";

@Controller("person")
export class PersonController {
    constructor( private readonly personservice:PersonService){}
    @Get()
    getAll():Promise<Person[]>{
        return this.personservice.getAll();
    }
    @Post()
    create(@Body(ValidationPipe) createpersondto:CreatePersonDTO): Promise<Person>{
        return this.personservice.create(createpersondto);
    }
    @Get(":id")
    findOne(@Param("id") id:string): Promise<Person>{
        return this.personservice.findOne(id)
    }
    @Patch(":id")
    update(
        @Param("id") id:string,
        @Body(
            ValidationPipe
            ) updatepersondto:UpdatePersonDTO): Promise<Person>{
        return this.personservice.update(id,updatepersondto)
    }
    @Delete(":id")
    remove(@Param("id") id:string):Promise<Person>{
        return this.personservice.remove(id);
    }
}