import { Entity, property, model } from '@loopback/repository';

@model()
export class Product extends Entity {

  @property({
    type: 'string',
    required: true
  })
  location: string;

  @property({
    type: 'number',
    required: true
  })
  addressNumber: number;

  @property({
    type: 'string',
    required: true
  })
  streetName: string;

  @property({
    type: 'string'
  })
  city: string;

  @property({
    type: 'number',
    required: true
  })
  zipCode: number;

  @property({
    type: 'number',
    required: false
  })
  aptNumber: number;

  @property({
    type: 'number',
    required: true
  })
  subleaserID: number;

  @property({
    type: 'number',
    required: true
  })
  productID: number;




}





