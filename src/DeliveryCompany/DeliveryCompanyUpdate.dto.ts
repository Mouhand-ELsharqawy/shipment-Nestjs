import { PartialType } from "@nestjs/mapped-types";
import { CreateDeliveryCompanyDTO } from "./DeliveryCompanyCreate.dto";

export class UpdateDeliveryCompanyDTO extends PartialType(CreateDeliveryCompanyDTO) {}