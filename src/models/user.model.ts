import { Entity, property, model } from '@loopback/repository';
import { Product } from './product.model';

@model({
  name: "user"
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  first_name: string;

  @property({
    type: 'string',
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    required: true,
  })
  is_subleaser: boolean;

  @property({
    type: 'string',
    required: false,
  })
  image: string;



  getId() {
    return this.id;
  }
}
