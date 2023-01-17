import { Dialect } from "sequelize";

export interface IDatabaseConfigAttributes {
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number;
    urlDatabase?: string;
    dialect?: Dialect;
    test?: any
}