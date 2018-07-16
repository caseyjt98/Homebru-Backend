import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    is_subleaser: boolean;
    getId(): number | undefined;
}
