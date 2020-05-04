
exports.up = function(knex) {
    // create task table
  return knex.schema.createTable('task', table =>{
      table.increments();
      
      table.text('description')
      .unique()
      .notNullable();

      table.text('notes');

      table.boolean('completed')
      .notNullable()
      .defaultTo(false);

  
      
  })
};

exports.down = function(knex) {
  // undo create project task (drop table)
  return knex.schema.dropTableIfExists('task');

};
