import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
<<<<<<< HEAD
=======
    id?: number;
>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0
    address_number: number;
    street_name: string;
    city: string;
    zip_code: number;
    apt_number: number;
<<<<<<< HEAD
    subleaser_id: number;
    product_id: number;
=======
    details: string;
    image: string;
>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0
}
