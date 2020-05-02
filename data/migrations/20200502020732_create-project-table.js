
exports.up = function(knex) {
    // create project table
  return knex.schema.createTable('project', table =>{
      table.increments();
      table.text('name', 128)
      .unique()
      .notNullable();

      table.text('description', 128)

      table.boolean('completed', 128)
      .unique()
      .notNullable()
      .defaultTo(false);
      
  })
};

exports.down = function(knex) {
  // undo create project table (drop table)
  return knex.schema.dropTableIfExists('project');

};
