
exports.up = function(knex) {
    // create project table
  return knex.schema.createTable('resource', table =>{
      table.increments('resource_id');
      table.text('name', 128)
      .unique()
      .notNullable();

      table.text('description', 128)

  
      
  })
};

exports.down = function(knex) {
  // undo create project table (drop table)
  return knex.schema.dropTableIfExists('resource');

};
