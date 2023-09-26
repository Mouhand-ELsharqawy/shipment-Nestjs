import { PartialType } from "@nestjs/mapped-types";
import { CreateCustomerDTO } from "./CustomerCreate.dto";

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}