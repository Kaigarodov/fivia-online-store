import { Provider } from "@nestjs/common";
import { PRODUCT_REPOSITORY_INJECT_TOKEN } from "../tokens/product-repository.inject-token";
import { db_models } from '@server/framework/data-service';

/**
 * модель таблицы продуктов (product) из базы данных
 */
export const PRODUCT_TABLE_REPOSITORY_PROVIDER: Provider  = {
    provide: PRODUCT_REPOSITORY_INJECT_TOKEN,
    useValue: db_models.Product
};
