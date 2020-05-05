exports.up = function (knex) {
  // create task table
  return knex.schema.createTable('project_resource', tbl => {
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      // this table must exist already
      .inTable('project')

    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      // this table must exist already
      .inTable('resource')

    // the combination of the two keys becomes our primary key
    // will enforce unique combinations of ids
    tbl.primary(['project_id', 'resource_id']);

  })
}



exports.down = function (knex) {
  // undo create project task (drop table)
  return knex.schema.dropTableIfExists('project_resource');

};
 