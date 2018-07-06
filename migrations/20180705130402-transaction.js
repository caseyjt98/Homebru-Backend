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

  db.createTable('transaction', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true
    },

    date_sold: {
      type: 'date',
      notNull: true
    }

  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('transaction', function (err) {
    if (err) return callback(err);
    return callback();
  });

};

exports._meta = {
  "version": 1
};
