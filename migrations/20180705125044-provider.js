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

  db.createTable('provider', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },
    //full_name: 'string'  // shorthand notation
    first_name: {
      type: 'string',
      length: 255,
      notNull: true
    },
    last_name: {
      type: 'string',
      lenght: 255,
      notNull: true
    },
    email: {
      type: 'string',
      notNull: true,
      unique: true
    },
    password: {
      type: 'string',
      length: 255,
      notNull: true
    },
    age: {
      type: 'date',
      notNull: true
    }

  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('provider', function (err) {
    if (err) return callback(err);
    return callback();
  });

};

exports._meta = {
  "version": 1
};
