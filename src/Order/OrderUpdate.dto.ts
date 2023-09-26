import { PartialType } from "@nestjs/mapped-types";
import { CreateOrderDTO } from "./OrderCreate.dto";

export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {}