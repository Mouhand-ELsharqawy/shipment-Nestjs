import { IsString, IsDate } from "class-validator";

export class CreateShipmentDTO {
    @IsDate()
    readonly estimatetime: Date;
    @IsString()
    readonly transportertype: string;
    @IsString()
    readonly city: string;
    @IsString()
    readonly street: string;
    @IsString()
    readonly regoin: string;
    @IsString()
    readonly xcoordinate: string;
    @IsString()
    readonly ycoordinate: string;
    @IsString()
    readonly status: string;
}