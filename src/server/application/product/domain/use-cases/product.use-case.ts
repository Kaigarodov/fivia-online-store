import { Injectable } from "@nestjs/common";
import { ProductEntity } from "src/server/application/product/domain/entities/product.entity";
import { ProductRepository } from "../abstracts/product.repository";

@Injectable()
export class ProductUseCase {
    constructor(
        private productRepository: ProductRepository,
    ){}

    public getAllProducts(): Promise<ProductEntity[]>{
        return this.productRepository.getAll();
    }

    public save(): void{
    }
}