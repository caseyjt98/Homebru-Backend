import { Entity, property, model } from '@loopback/repository';


@model({
  name: "product"
})
export class Product extends Entity {

  @property({
    type: 'number',
    id: true
  })
  id?: number;

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
    type: 'string',
    required: true
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
    type: 'string',
    required: false
  })
  details: string;

  @property({
    type: 'string',
    required: false
  })
  image: string;

  @property({
    type: 'number',
    required: true
  })
  num_residents: number;

  @property({
    type: 'number',
    required: true
  })
  num_bedrooms: number;

  @property({
    type: 'number',
    required: true
  })
  num_bathrooms: number;



}











