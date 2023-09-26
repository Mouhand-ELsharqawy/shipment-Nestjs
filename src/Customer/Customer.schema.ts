import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class CustomerClass extends Document {
    @Prop({ required: true })
    CreditCardNum: string;
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerClass);