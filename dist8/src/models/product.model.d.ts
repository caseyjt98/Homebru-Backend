import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    location: string;
    addressNumber: number;
    streetName: string;
    city: string;
    zipCode: number;
    aptNumber: number;
    subleaserID: number;
    productID: number;
}
