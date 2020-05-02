"use strict";

var db = require('../data/config'); // resolves to a promise that resolves to an array of all resource in the database.


function find() {
  return db('resource');
} // resolves to  Resolve to a single resource object (or null)


function findById(id) {
  return db('resource').where({
    'resource_id': id
  }).first();
} // Resolves to an array of all correctly ordered step for the given resource: `[ { id: 17, resource_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, resource_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.


function add(resource) {
  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('resource').insert(resource).then(function (ids) {
            return findById(ids[0]);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function remove(id) {
  return db('resource').where({
    'resource_id': id
  }).first().del();
}

function update(changes, id) {
  var resource;
  return regeneratorRuntime.async(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db("resource").where({
            'resource_id': id
          }).update(changes));

        case 2:
          resource = _context2.sent;
          return _context2.abrupt("return", resource);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  find: find,
  add: add,
  remove: remove,
  findById: findById,
  update: update
};