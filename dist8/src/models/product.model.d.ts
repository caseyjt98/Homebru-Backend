import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    address_number: number;
    street_name: string;
    city: string;
    zip_code: number;
    apt_number: number;
    subleaser_id: number;
    product_id: number;
}
