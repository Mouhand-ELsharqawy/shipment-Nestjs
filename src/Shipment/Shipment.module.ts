import { Module } from "@nestjs/common";
import { ShipmentController } from "./Shipment.controller";
import { ShipmentService } from "./Shipment.service";
import { MongooseModule } from '@nestjs/mongoose';
import { ShipmentClass, ShipmentSchema } from "./Shipment.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ShipmentClass.name,
                schema: ShipmentSchema
            }
        ])
    ],
    controllers: [ ShipmentController ],
    providers: [ ShipmentService ]
})
export class ShipmentModule {}