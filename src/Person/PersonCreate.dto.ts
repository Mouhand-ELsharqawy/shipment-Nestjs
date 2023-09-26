import { IsString } from "class-validator";

export class CreatePersonDTO {
    @IsString()
    readonly nickname: string;
    @IsString()
    readonly firstname: string;
    @IsString()
    readonly middlename: string;
    @IsString()
    readonly lastname: string;
    @IsString()
    readonly phone: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly city: string;
    @IsString()
    readonly regoin: string;
    @IsString()
    readonly street:string;
}