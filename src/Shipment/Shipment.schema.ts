import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ShipmentClass extends Document {

    @Prop({ required: true })
    estimatetime: Date;
    @Prop({ required: true })
    transportertype: string;
    @Prop({ required: true })
    city: string;
    @Prop({ required: true })
    street: string;
    @Prop({ required: true })
    regoin: string;
    @Prop({ required: true })
    xcoordinate: string;
    @Prop({ required: true })
    ycoordinate: string;
    @Prop({ required: true })
    status: string;
}

export const ShipmentSchema = SchemaFactory.createForClass(ShipmentClass);