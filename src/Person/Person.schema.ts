import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class PersonClass extends Document {
    @Prop({ required: true })
    nickname: string;
    @Prop({ required: true })
    firstname: string;
    @Prop({ required: true })
    middlename: string;
    @Prop({ required: true })
    lastname: string;
    @Prop({ required: true })
    phone: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    city: string;
    @Prop({ required: true })
    regoin: string;
    @Prop({ required: true })
    street:string;
}

export const PersonSchema = SchemaFactory.createForClass(PersonClass);