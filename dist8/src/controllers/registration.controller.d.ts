import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class RegistrationController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    registerUser(user: User): Promise<User>;
}
