
exports.up = function(knex) {
    // create project table
  return knex.schema.createTable('resource', table =>{
      table.increments();
      table.string('name', 30)
      .unique()
      .notNullable();

      table.text('description')

  
      
  })
};

exports.down = function(knex) {
  // undo create project table (drop table)
  return knex.schema.dropTableIfExists('resource');

};
