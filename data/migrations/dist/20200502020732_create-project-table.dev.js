"use strict";

exports.up = function (knex) {
  // create project table
  return knex.schema.createTable('project', function (table) {
    table.increments('project_id');
    table.text('name', 128).unique().notNullable();
    table.text('description', 128);
    table["boolean"]('completed', 128).notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  // undo create project table (drop table)
  return knex.schema.dropTableIfExists('project');
};