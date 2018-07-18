import { Entity, property, model } from '@loopback/repository';


@model({
  name: "product"
})
export class Product extends Entity {

  @property({
    type: 'number',
<<<<<<< HEAD
    required: true
  })
  id: number;
=======
    id: true
  })
  id?: number;
>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0

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
<<<<<<< HEAD
=======

  @property({
    type: 'string',
    required: false
  })
  details: string;
>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0

  @property({
    type: 'string',
    required: false
  })
<<<<<<< HEAD
  subleaser_id: number;
=======
  image: string;

}


>>>>>>> dcac69cf593d236170680e95fc11881ef072bfa0









