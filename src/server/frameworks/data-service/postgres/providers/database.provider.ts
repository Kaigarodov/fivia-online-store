import { Provider } from "@nestjs/common";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { DATABASE_INJECT_TOKEN } from "src/server/frameworks/data-service/postgres/tokens/database.inject-token";
import { databaseConfig } from "../configs/database.config";
import { Product } from "../models/product.model";

export const databaseProviders: Provider[] = [{
    provide: DATABASE_INJECT_TOKEN,
    useFactory: async (): Promise<Sequelize> => {
        const config: SequelizeOptions = {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME_DEVELOPMENT,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            dialect: 'postgres'
        };

        const sequelize = new Sequelize(config);
        sequelize.addModels([
            Product
        ]); 
        await sequelize.sync();
        
        return sequelize;
    }
}]