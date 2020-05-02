"use strict";

exports.up = function (knex) {
  // create task table
  return knex.schema.createTable('project_resource', function (table) {
    table.increments('project_id');
    table.integer('resource_id').notNullable();
  });
};

exports.down = function (knex) {
  // undo create project task (drop table)
  return knex.schema.dropTableIfExists('project_resource');
};