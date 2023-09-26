import { IsString, IsDate } from "class-validator";

export class CreateOrderDTO {
    @IsDate()
    readonly date: Date;
    @IsString()
    readonly paymentmethod: string;
    @IsString()
    readonly status: string
}