const db = require('../data/config');

// resolves to a promise that resolves to an array of all project in the database.

function find() {
    return db('project')
}

// resolves to  Resolve to a single project object (or null)

function findById(id) {
    return db('project').where({ 'project_id' : id }).first();
}

// Resolves to an array of all correctly ordered step for the given project: `[ { id: 17, project_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, project_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.

async function add(project) {
    await db('project').insert(project)
    .then(ids => {
      return findById(ids[0]);
    });
}


function remove(id) {
    return db('project').where({ 'project_id' : id }).first().del()

}

function findSteps(id) {
    /*  SELECT s.id, k.project_name, s.step_number,s.instructions 
     FROM steps AS s
     JOIN [project] AS k
     ON s.id = k.id; */

    //  const steps =  db('steps').where({id}) 

    const steps = db('steps as s')
        .join('project as k', 's.id', 'k.id')
        .select('s.id', 'k.project_name', 's.step_number', 's.instructions');



    return db(steps).where({ id });
}

async function update(changes,id) {

    
      const project =  await db("project").where({ 'project_id' : id }).update(changes);
      return project
      
}





module.exports = {
    find,
    add,
    remove,
    findById,
    findSteps,
    update
}