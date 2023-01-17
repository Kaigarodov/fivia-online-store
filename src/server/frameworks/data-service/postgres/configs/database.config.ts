import { IDatabaseConfig } from "src/server/frameworks/data-service/postgres/interfaces/database-config.interface";

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect :'postgres',
        test: process.env
    }
}