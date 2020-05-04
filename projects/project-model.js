const db = require('../data/config');

// resolves to a promise that resolves to an array of all project in the database.

function find() {
    return db('project')
}

// resolves to  Resolve to a single project object (or null)


function findById(id) {
    return db('project').where({ id }).first();
}

// Resolves to an array of all correctly ordered step for the given project: `[ { id: 17, project_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, project_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.

async function add(project) {
    await db('project').insert(project)
        .then(ids => {
            return findById(ids[0]);
        });
}


function remove(id) {
    return db('project').where({ id }).first().del()

}



async function update(changes, id) {


    const project = await db("project").where({ id }).update(changes);
    return project

}



//stretch
async function findMoreInfoById(id) {

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

    const info = await db('info as i')
    .join('project as p', 'i.id', 'p.id')
    .join('resource as r', 'p.id', 'r.id')
    .join('task as t', 'r.id', 't.id')
    .select('i.id', 'i.name', 'i.description', 'i.completed', 'p.id', 'p.name', 'p.description', 'p.completed', ' t.id', 't.description', 't.notes', 't.completed', 'r.id', 'r.name', 'r.description')



    return await db(info).where({ 'i.id': id }).first();
}




module.exports = {
    find,
    add,
    remove,
    findById,
    update,
    findMoreInfoById
}