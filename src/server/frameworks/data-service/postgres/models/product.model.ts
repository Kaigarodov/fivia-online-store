import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ProductEntity } from "src/server/application/product/domain/entities/product.entity";

@Table
export class Product extends Model<ProductEntity> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public description: string
}