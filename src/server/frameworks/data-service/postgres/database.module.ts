import { Module } from "@nestjs/common";
import { databaseProviders } from "./providers/database.provider";

@Module({
    providers: databaseProviders,
})
export class DatabaseModule {}