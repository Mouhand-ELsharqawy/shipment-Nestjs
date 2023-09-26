import { IsString, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly image: string;
    @IsNumber()
    readonly quantity: number;
    @IsNumber()
    readonly price: number;
    @IsString()
    readonly description: string;
    @IsString()
    readonly order: string;
}