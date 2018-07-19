import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    address_number: number;
    street_name: string;
    city: string;
    zip_code: number;
    apt_number: number;
    details: string;
    image: string;
    num_residents: number;
    num_bedrooms: number;
    num_bathrooms: number;
}
