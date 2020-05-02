"use strict";

var db = require('../data/config'); //stretch


function findMoreInfoById(id) {
  var info;
  return regeneratorRuntime.async(function findMoreInfoById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('project as p').join('project as p', 'p.project_id', 'r.resource_id').join('resource as r', 'r.resource_id', 't.id').join('task as t', 't.id', 'i.id').select('i.id', 'i.name', 'i.description', 'i.completed', 'p.project_id', 'p.name', 'p.description', 'p.completed', ' t.id', 't.description', 't.notes', 't.completed', 'r.resource_id', 'r.name', 'r.description'));

        case 2:
          info = _context.sent;
          return _context.abrupt("return", db(info).where({
            id: id
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  findMoreInfoById: findMoreInfoById
};