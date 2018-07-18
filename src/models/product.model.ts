import { Entity, property, model } from '@loopback/repository';

@model()
export class Product extends Entity {

  @property({
    type: 'number',
    required: true
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    column: "address_number"
  })
  address_number: number;

  @property({
    type: 'string',
    required: true
  })
  street_name: string;

  @property({
    type: 'string'
  })
  city: string;

  @property({
    type: 'number',
    required: true
  })
  zip_code: number;

  @property({
    type: 'number',
    required: false
  })
  apt_number: number;

  @property({
    type: 'number',
    required: true
  })
  subleaser_id: number;




}





