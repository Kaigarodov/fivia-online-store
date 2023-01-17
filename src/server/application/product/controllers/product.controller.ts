import {Controller, Get, Post} from '@nestjs/common'
import { ProductEntity } from '../domain/entities/product.entity';
import { ProductUseCase } from '../domain/use-cases/product.use-case';

@Controller('api/product')
export class ProductController {

    constructor(
        public productUseCase: ProductUseCase
    ){}

    @Get()
    public getAll(): Promise<ProductEntity[]>{
        return this.productUseCase.getAllProducts();
    }

    @Post()
    public async create(): Promise<void> {
        await this.productUseCase
    }
}