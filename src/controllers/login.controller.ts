import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
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
      throw new HttpErrors.Unauthorized('missing email or password');
    }

    //Find the user with given email (should always be only one)
    let foundUser = await this.userRepo.findOne({
      where: {
        email: user.email
      },
    }) as User;


    var bcrypt = require('bcryptjs');

    //Check the found user's password with the given password
    if (!await bcrypt.compare(user.password, foundUser.password)) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let jwt = sign({
      user: {  //make sure only get id and email, dont want password
        first_name: foundUser.first_name,
        last_name: foundUser.last_name,
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
