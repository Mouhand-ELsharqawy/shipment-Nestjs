import { Module } from "@nestjs/common";
import { PersonController } from "./Person.controller";
import { PersonService } from "./Person.service";
import { MongooseModule } from '@nestjs/mongoose';
import { PersonClass, PersonSchema } from "./Person.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: PersonClass.name,
                schema: PersonSchema
            }
        ])
    ],
    controllers: [ PersonController ],
    providers: [ PersonService ]
})
export class PersonModule {}