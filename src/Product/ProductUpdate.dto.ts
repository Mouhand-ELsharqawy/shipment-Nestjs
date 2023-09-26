import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./ProductCreate.dto";

export class UpdateProductDTO extends PartialType(CreateProductDto) {}