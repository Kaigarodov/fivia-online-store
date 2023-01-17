import { Module } from "@nestjs/common";
import { ProductController } from "src/server/application/product/controllers/product.controller";
import { ProductRepositoryImplement } from "src/server/application/product/infrastructure/repository/product.repository-implement";
import { ProductRepository } from "src/server/application/product/domain/abstracts/product.repository";
import { ProductUseCase } from "src/server/application/product/domain/use-cases/product.use-case";
import { PRODUCT_TABLE_REPOSITORY_PROVIDER } from "./infrastructure/providers/product-repository.provider";

@Module({
    controllers: [ProductController],
    providers: [
        ProductUseCase,
        PRODUCT_TABLE_REPOSITORY_PROVIDER,
        {
            provide: ProductRepository,
            useClass: ProductRepositoryImplement,
        }
    ]
})
export class ProductModule {}