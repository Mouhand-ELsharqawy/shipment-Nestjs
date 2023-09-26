import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { OrderClass } from "src/Order/Order.schema";

@Schema()
export class ProductClass extends Document {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    image: string;
    @Prop({ required: true })
    quantity: number;
    @Prop({ required: true })
    price: number;
    @Prop({ required: true })
    description: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: OrderClass.name, required: true })
    orderId: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductClass);