import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { sign, verify } from 'jsonwebtoken';
import {
  HttpErrors,
  post,
  get,
  param,
  requestBody,
} from '@loopback/rest';

export class LoginController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  /** tests out that our jwt token works */
  @get('/verify')
  verifyToken(@param.query.string("jwt") jwt: string) {

    try {
      let payload = verify(jwt, "qwerty");
      return payload;
    } catch (err) {
      throw new HttpErrors.Unauthorized("invalid token");
    }

    /** the user is authenticated and we can progress */
  }

  @post('/login')
  async loginUser(@requestBody() user: User) {
    // Check that email and password are both supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    // Check that email and password are valid
    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: user.email },
        { password: user.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let foundUser = await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
      },
    }) as User;

    let jwt = sign({
      user: {  //make sure only get id and email, dont want password
        id: foundUser.id,
        email: foundUser.email
      }
    }, "qwerty", {  //qwerty is the secret keyword for our own api
        issuer: "auth.ix.co.za",
        audience: "ix.co.za"
      });

    //dont just return jwt (string), return json object
    return {
      token: jwt
    };

  }

}
