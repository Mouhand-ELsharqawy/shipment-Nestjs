import { Module } from "@nestjs/common";
import { DeliveryCompanyController } from "./DeliveryCompany.controller";
import { DeliveryCompanyService } from "./DeliveryCompany.service";
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryCompanyClass, DeliveryCompanySchema } from "./DeliveryCompany.schema";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: DeliveryCompanyClass.name,
                schema: DeliveryCompanySchema
            }
        ])
    ],
    controllers: [ DeliveryCompanyController ],
    providers: [ DeliveryCompanyService ]
})
export class DeliveryCompanyModule {}