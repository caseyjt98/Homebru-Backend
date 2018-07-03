import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Product } from '../models/product.model';
import { inject } from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
  > {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Product, datasource);
  }
}
