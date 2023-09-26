import { IsString } from "class-validator";

export class CreateSupplierDTO {
    @IsString()
    readonly type: string;
}