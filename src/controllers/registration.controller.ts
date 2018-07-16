import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { sign, verify } from 'jsonwebtoken';
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
    let userToCreate = new User();
    userToCreate.first_name = user.first_name;
    userToCreate.last_name = user.last_name;
    userToCreate.email = user.email;
    userToCreate.is_subleaser = user.is_subleaser;

    //Hash the user's password before creating the user
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);

    userToCreate.password = hash;

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count({ email: user.email }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }


    let newUser = await this.userRepo.create(userToCreate);

    let jwt = sign({
      user: {  //make sure only get id and email, dont want password
        id: newUser.id,
        email: newUser.email,
        first_name: newUser.first_name,
        last_name: newUser.last_name
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
