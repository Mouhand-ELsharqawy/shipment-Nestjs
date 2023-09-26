import { IsString } from "class-validator";
export class CreateDeliveryCompanyDTO {
    @IsString()
    readonly name: string
    @IsString()
    readonly address: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly mobile: string
}