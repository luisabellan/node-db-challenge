"use strict";exports.up=function(e){return e.schema.createTable("task",function(e){e.increments(),e.text("description").unique().notNullable(),e.text("notes"),e.boolean("completed").notNullable().defaultTo(!1)})},exports.down=function(e){return e.schema.dropTableIfExists("task")};