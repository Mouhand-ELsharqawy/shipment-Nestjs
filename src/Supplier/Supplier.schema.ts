import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class SupplierClass extends Document {
    @Prop({ required: true })
    type: string;
}

export const SupplierSchema = SchemaFactory.createForClass(SupplierClass);