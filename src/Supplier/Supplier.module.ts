import { Module } from "@nestjs/common";
import { SupplierController } from "./Supplier.controller";
import { SupplierService } from "./Supplier.service";
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierClass, SupplierSchema } from "./Supplier.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: SupplierClass.name,
                schema: SupplierSchema
            }
        ])
    ],
    controllers: [ SupplierController ],
    providers: [ SupplierService ]
})
export class SupplierModule {}