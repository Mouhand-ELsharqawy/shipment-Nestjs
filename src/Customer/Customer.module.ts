import { Module } from "@nestjs/common";
import { CustomerController } from "./Customer.controller";
import { CustomerService } from "./Customer.service";
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerClass, CustomerSchema } from "./Customer.schema";


@Module({
    imports:[
        MongooseModule.forFeature([
            { 
                name: CustomerClass.name, 
                schema: CustomerSchema 
            }
        ])
    ],
    controllers: [ CustomerController ],
    providers: [ CustomerService ]
})

export class CustomerModule {}