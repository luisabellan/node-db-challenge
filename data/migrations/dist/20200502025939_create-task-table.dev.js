"use strict";

exports.up = function (knex) {
  // create task table
  return knex.schema.createTable('task', function (table) {
    table.increments();
    table.text('description', 128).unique().notNullable();
    table.text('notes', 128);
    table["boolean"]('completed', 128).notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  // undo create project task (drop table)
  return knex.schema.dropTableIfExists('task');
};