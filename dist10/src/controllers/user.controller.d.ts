import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
    editUser(id: number, image: {
        image: string;
    }): Promise<boolean>;
}
