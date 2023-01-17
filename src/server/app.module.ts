import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { NODE_ENV } from 'src/shared/constants/env';
import { ProductModule } from './application/product/product.module';
import { DatabaseModule } from './frameworks/data-service/postgres/database.module';
import { ConfigModule } from '@nestjs/config';
import { AdminjsModule } from './frameworks/cms-service/adminjs/adminjs.module';
@Module({
    imports: [
        RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
            viewsDir: null,
        }),
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        AdminjsModule,
        DatabaseModule,
        ProductModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
