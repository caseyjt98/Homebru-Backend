'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {

  db.createTable('product', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    //full_name: 'string'  // shorthand notation
    address_number: {
      type: 'int',
      notNull: true
    },
    street_name: {
      type: 'string',
      lenght: 255,
      notNull: true
    },
    city: {
      type: 'string',
      length: 255,
      notNull: true
    },
    zip_code: {
      type: 'int',
      notNull: true
    },
    apt_number: {
      type: 'int'
    },
    details: {
      type: 'string',
      length: 500
    },
    image: {
      type: 'string',
      length: 700
    },
    num_residents: {
      type: 'int',
      notNull: true
    },
    num_bedrooms: {
      type: 'int',
      notNull: true
    },
    num_bathrooms: {
      type: 'int',
      notNull: true
    }

  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('product', function (err) {
    if (err) return callback(err);
    return callback();
  });

};

exports._meta = {
  "version": 1
};
