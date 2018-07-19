import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { verify } from 'jsonwebtoken';
import {
  HttpErrors,
  get,
  param,
  patch,
  requestBody
} from '@loopback/rest';


export class UserController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }

  /// Need a PATCH method to edit a user!
  @patch('/users')
  async editUser(@param.query.number("id") id: number, @requestBody() image: { image: string }) {

    //try {
    // let payload = verify(jwt, "qwerty") as any;

    //let id = payload.user.id;
    // console.log(id);

    return await this.userRepo.updateById(id, { image: image.image });


    //} catch (err) {
    //  throw new HttpErrors.Unauthorized("invalid token");
    // }
  }

}
