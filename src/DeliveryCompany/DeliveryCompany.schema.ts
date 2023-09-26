import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class DeliveryCompanyClass extends Document {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    address: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    mobile: string;
}

export const DeliveryCompanySchema  = SchemaFactory.createForClass(DeliveryCompanyClass);