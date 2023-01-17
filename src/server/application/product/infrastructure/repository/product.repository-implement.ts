import { ProductEntity } from "src/server/application/product/domain/entities/product.entity";
import { ProductRepository } from "src/server/application/product/domain/abstracts/product.repository";
import { Inject } from "@nestjs/common";
import { db_interfaces } from "@server/framework/data-service";
import { PRODUCT_REPOSITORY_INJECT_TOKEN } from "../tokens/product-repository.inject-token";

export class ProductRepositoryImplement implements ProductRepository {
    constructor(
        @Inject(PRODUCT_REPOSITORY_INJECT_TOKEN)
        private _productRepositoryService: db_interfaces.IRepository<ProductEntity>) {

        }
    public async getAll(): Promise<ProductEntity[]> {
        const product = await this._productRepositoryService.findAll()
        return product;
    }

    public create(entity: ProductEntity): void {
    }
}