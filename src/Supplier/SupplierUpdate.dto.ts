import { PartialType } from "@nestjs/mapped-types";
import { CreateSupplierDTO } from "./SupplierCreate.dto";

export class UpdateSupplierDTO extends PartialType(CreateSupplierDTO) {}