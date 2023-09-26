
import { PartialType } from "@nestjs/mapped-types";
import { CreatePersonDTO } from "./PersonCreate.dto";

export class UpdatePersonDTO extends PartialType(CreatePersonDTO) {}