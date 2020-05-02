"use strict";

var db = require('../data/config'); // resolves to a promise that resolves to an array of all task in the database.


function find() {
  return db('task');
} // resolves to  Resolve to a single task object (or null)


function findById(id) {
  return db('task').where({
    id: id
  }).first();
} // Resolves to an array of all correctly ordered step for the given task: `[ { id: 17, task_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, task_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.


function add(task) {
  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('task').insert(task).then(function (ids) {
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
  return db('task').where({
    id: id
  }).first().del();
}

function update(changes, id) {
  var task;
  return regeneratorRuntime.async(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db("task").where({
            id: id
          }).update(changes));

        case 2:
          task = _context2.sent;
          return _context2.abrupt("return", task);

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