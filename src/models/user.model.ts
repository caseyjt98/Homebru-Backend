import { Entity, property, model } from '@loopback/repository';

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

  getId() {
    return this.id;
  }
}
