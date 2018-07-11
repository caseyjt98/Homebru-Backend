import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { sign } from 'jsonwebtoken';
import {
  HttpErrors,
  post,
  requestBody,
} from '@loopback/rest';

export class RegistrationController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  @post('/registration')
  async registerUser(@requestBody() user: User) {
    // Check that required fields are supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.BadRequest('missing email or password');
    }

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count({ email: user.email }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    //Hash the user's password before creating the user
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);

    //let hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hash;

    let newUser = await this.userRepo.create(user);

    let jwt = sign({
      user: {  //make sure only get id and email, dont want password
        id: newUser.id,
        email: newUser.email
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
