const db = require('../data/config');



//stretch
async function findMoreInfoById(id){
  
    /*  SELECT i.id, i.name, i.description, i.completed, p.project_id, p.name, p.description, p.completed, t.id, t.description, t.notes, t.completed, r.resource_id, r.name, r.description 
     FROM project AS p
     JOIN [resource] AS r
     ON p.project_id = r.resource_id
     JOIN [task] AS t
     ON r.resource_id = t.id
      JOIN [info] AS i
     ON t.id = i.id; 
     
     */

    //  const steps =  db('steps').where({id}) 

    const info = await db('project as p')
        .join('project as p', 'p.project_id', 'r.resource_id')
        .join('resource as r', 'r.resource_id', 't.id')
        .join('task as t', 't.id', 'i.id')
        .select('i.id', 'i.name', 'i.description', 'i.completed', 'p.project_id', 'p.name', 'p.description', 'p.completed',' t.id', 't.description', 't.notes', 't.completed', 'r.resource_id', 'r.name', 'r.description');



    return db(info).where({ id });
}








module.exports = {
    
    findMoreInfoById
}