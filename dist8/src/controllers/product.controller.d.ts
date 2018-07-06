import { ProductRepository } from '../repositories/product.repository';
import { Product } from '../models/product.model';
export declare class ProductController {
    protected productRepo: ProductRepository;
    constructor(productRepo: ProductRepository);
    createProduct(product: Product): Promise<Product>;
    findProducts(): Promise<Product[]>;
    findProductsById(id: number): Promise<Product>;
}
