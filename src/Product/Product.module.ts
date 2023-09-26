import { Module } from "@nestjs/common";
import { ProductController } from "./Product.controller";
import { ProductService } from "./Product.service";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductClass, ProductSchema } from "./Product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ProductClass.name,
                schema: ProductSchema
            }
        ])
    ],
    controllers: [ ProductController ],
    providers: [ ProductService ]
})
export class ProductModule {}