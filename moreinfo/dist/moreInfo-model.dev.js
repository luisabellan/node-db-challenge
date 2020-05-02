"use strict";

var db = require('../data/config'); //stretch


function findMoreInfoById(id) {
  /*  SELECT p.project_id, p.name, p.description, p.completed, t.id, t.description, t.notes, t.completed, r.resource_id, r.name, r.description 
   FROM project AS p
   JOIN [resource] AS r
   ON p.project_id = r.resource_id
   JOIN [task] AS t
   ON r.resource_id = t.id; */
  //  const steps =  db('steps').where({id}) 
  var project = db('project as p').join('project as p', 'p.project_id', 'r.resource_id').join('resource as r', 'r.resource_id', 't.id').select('p.project_id', 'p.name', 'p.description', 'p.completed', ' t.id', 't.description', 't.notes', 't.completed', 'r.resource_id', 'r.name', 'r.description');
  return db(project).where({
    'project_id': id
  });
}

module.exports = {
  findMoreInfoById: findMoreInfoById
};