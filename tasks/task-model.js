const db = require('../data/config');

// resolves to a promise that resolves to an array of all task in the database.

function find() {
    return db('task')
}

// resolves to  Resolve to a single task object (or null)


function findById(id) {
    return db('task').where({ id }).first();
}
 


// Resolves to an array of all correctly ordered step for the given task: `[ { id: 17, task_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, task_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.

async function add(task) {
    await db('task').insert(task)
    .then(ids => {
      return findById(ids[0]);
    });
}


function remove(id) {
    return db('task').where({ id }).first().del()

}



async function update(changes,id) {

    
      const task =  await db("task").where({ id }).update(changes);
      return task
      
}





module.exports = {
    find,
    add,
    remove,
    findById,
    update
}