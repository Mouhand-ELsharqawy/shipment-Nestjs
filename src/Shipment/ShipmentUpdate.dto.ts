import { PartialType } from "@nestjs/mapped-types";
import { CreateShipmentDTO } from "./ShipmentCreate.dto";

export class UpdateShipmentDTO extends PartialType(CreateShipmentDTO) {}