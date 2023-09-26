import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class OrderClass extends Document {
    @Prop({ required: true })
    date: Date;
    @Prop({ required: true })
    paymentmethod: string;
    @Prop({ required: true })
    status: string
}

export const OrderSchem = SchemaFactory.createForClass(OrderClass);