"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const product_repository_1 = require("../repositories/product.repository");
const product_model_1 = require("../models/product.model");
const rest_1 = require("@loopback/rest");
let ProductController = class ProductController {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async createProduct(product) {
        // Check that required fields are supplied
        if (!product.addressNumber || !product.streetName || !product.city || !product.zipCode) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        // Check that product does not already exist
        let productExists = !!(await this.productRepo.count({ productID: product.productID }));
        if (productExists) {
            throw new rest_1.HttpErrors.BadRequest('product already exists');
        }
        return await this.productRepo.create(product);
    }
    async findProducts() {
        return await this.productRepo.find();
    }
    async findProductsById(id) {
        // Check for valid ID
        let productExists = !!(await this.productRepo.count({ id }));
        if (!productExists) {
            throw new rest_1.HttpErrors.BadRequest(`product ID ${id} does not exist`);
        }
        return await this.productRepo.findById(id);
    }
};
__decorate([
    rest_1.post('/product'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    rest_1.get('/products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProducts", null);
__decorate([
    rest_1.get('/products/{productID}'),
    __param(0, rest_1.param.path.number('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findProductsById", null);
ProductController = __decorate([
    __param(0, repository_1.repository(product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map