import { repository } from '@loopback/repository';
import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';
import {
  HttpErrors,
  post,
  get,
  requestBody,
  param
} from '@loopback/rest';

export class ProductController {
  constructor(
    @repository(ProductRepository) protected productRepo: ProductRepository,
  ) { }

  @post('/product')
  async createProduct(@requestBody() product: Product): Promise<Product> {
    // Check that required fields are supplied
    if (!product.addressNumber || !product.streetName || !product.city || !product.zipCode) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that product does not already exist
    let productExists: boolean = !!(await this.productRepo.count({ productID: product.productID }));

    if (productExists) {
      throw new HttpErrors.BadRequest('product already exists');
    }

    return await this.productRepo.create(product);
  }

  @get('/products')
  async findProducts(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  @get('/products/{productID}')
  async findProductsById(@param.path.number('productID') id: number): Promise<Product> {
    // Check for valid ID
    let productExists: boolean = !!(await this.productRepo.count({ id }));

    if (!productExists) {
      throw new HttpErrors.BadRequest(`product ID ${id} does not exist`);
    }

    return await this.productRepo.findById(id);
  }
}
