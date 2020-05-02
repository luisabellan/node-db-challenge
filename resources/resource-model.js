const db = require('../data/config');

// resolves to a promise that resolves to an array of all resource in the database.

function find() {
    return db('resource')
}

// resolves to  Resolve to a single resource object (or null)


function findById(id) {
    return db('resource').where({ 'resource_id' : id }).first();
}
 


// Resolves to an array of all correctly ordered step for the given resource: `[ { id: 17, resource_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, resource_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.

async function add(resource) {
    await db('resource').insert(resource)
    .then(ids => {
      return findById(ids[0]);
    });
}


function remove(id) {
    return db('resource').where({ 'resource_id' : id }).first().del()

}



async function update(changes,id) {

    
      const resource =  await db("resource").where({ 'resource_id' : id }).update(changes);
      return resource
      
}





module.exports = {
    find,
    add,
    remove,
    findById,
    update
}