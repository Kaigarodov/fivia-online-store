import { Module } from "@nestjs/common";
import { AdminModule } from '@adminjs/nestjs';
import {Resource, Database} from '@adminjs/sequelize'
import adminjs from "adminjs";
import { Product } from "../../data-service/postgres/models/product.model";

adminjs.registerAdapter({
    Resource,
    Database
})

//TODO: Вынести в конфиг
const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
  }


const authenticate = async (email: string, password: string) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
  }

@Module({
    imports: [
        AdminModule.createAdminAsync({
            useFactory: () => ({
              adminJsOptions: {
                rootPath: '/admin',
                resources: [Product],
              },
              auth: {
                authenticate,
                cookieName: 'adminjs',
                cookiePassword: 'secret'
              },
              sessionOptions: {
                resave: true,
                saveUninitialized: true,
                secret: 'secret'
              },
            }),
          }),
    ]
})
export class AdminjsModule {}