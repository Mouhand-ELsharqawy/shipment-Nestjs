import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './Customer/Customer.module';
import { DeliveryCompanyModule } from './DeliveryCompany/DeliveryCompany.module';
import { OrderModule } from './Order/Order.module';
import { ProductModule } from './Product/Product.module';
import { ShipmentModule } from './Shipment/Shipment.module';
import { SupplierModule } from './Supplier/Supplier.module';


@Module({
  imports: [
    MongooseModule.forRoot(''),
    CustomerModule,
    DeliveryCompanyModule,
    OrderModule,
    ProductModule,
    ShipmentModule,
    SupplierModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
