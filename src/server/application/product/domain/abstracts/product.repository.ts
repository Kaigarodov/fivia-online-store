import { ProductEntity } from "src/server/application/product/domain/entities/product.entity";

export abstract class ProductRepository {
    public abstract getAll(): Promise<ProductEntity[]>
    public abstract create(entity: ProductEntity):void
}