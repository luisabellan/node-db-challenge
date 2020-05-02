"use strict";

var db = require('../data/config'); // resolves to a promise that resolves to an array of all project in the database.


function find() {
  return db('project');
} // resolves to  Resolve to a single project object (or null)


function findById(id) {
  return db('project').where({
    'project_id': id
  }).first();
} // Resolves to an array of all correctly ordered step for the given project: `[ { id: 17, project_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, project_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.


function add(project) {
  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('project').insert(project).then(function (ids) {
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
  return db('project').where({
    'project_id': id
  }).first().del();
}

function update(changes, id) {
  var project;
  return regeneratorRuntime.async(function update$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db("project").where({
            'project_id': id
          }).update(changes));

        case 2:
          project = _context2.sent;
          return _context2.abrupt("return", project);

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
  update: update,
  findMoreInfoById: findMoreInfoById
};