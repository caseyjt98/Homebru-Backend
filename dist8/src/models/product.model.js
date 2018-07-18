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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Product = class Product extends repository_1.Entity {
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        column: "address_number"
    }),
    __metadata("design:type", Number)
], Product.prototype, "address_number", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Product.prototype, "street_name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Product.prototype, "city", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "zip_code", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: false
    }),
    __metadata("design:type", Number)
], Product.prototype, "apt_number", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false
    }),
<<<<<<< HEAD
    __metadata("design:type", Number)
], Product.prototype, "subleaser_id", void 0);
=======
    __metadata("design:type", String)
], Product.prototype, "details", void 0);
>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0
__decorate([
    repository_1.property({
        type: 'string',
        required: false
    }),
<<<<<<< HEAD
    __metadata("design:type", Number)
], Product.prototype, "product_id", void 0);
=======
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0
Product = __decorate([
    repository_1.model({
        name: "product"
    })
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map