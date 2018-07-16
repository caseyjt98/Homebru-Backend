import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class LoginController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    /** tests out that our jwt token works */
    verifyToken(jwt: string): string | object;
    loginUser(user: User): Promise<{
        token: string;
    }>;
}
