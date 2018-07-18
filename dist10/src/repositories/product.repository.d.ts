import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Product } from '../models/product.model';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
