import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class LoginController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    loginUser(user: User): Promise<User>;
}
