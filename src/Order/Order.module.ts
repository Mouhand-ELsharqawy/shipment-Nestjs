import { Module } from "@nestjs/common";
import { OrderController } from "./Order.controller";
import { OrderService } from "./Order.service";
import { MongooseModule } from '@nestjs/mongoose';
import { OrderClass, OrderSchem } from "./Order.schema";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: OrderClass.name,
                schema: OrderSchem
            }
        ])
    ],
    controllers: [ OrderController ],
    providers: [ OrderService ]
})
export class OrderModule {}