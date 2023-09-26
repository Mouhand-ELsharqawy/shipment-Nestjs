import { IsString } from "class-validator";

export class CreateCustomerDTO {
    @IsString()
    readonly CreditCardNum:string
}