"use strict";exports.up=function(e){return e.schema.createTable("project",function(e){e.increments("project_id"),e.text("name",128).unique().notNullable(),e.text("description",128),e.boolean("completed",128).notNullable().defaultTo(!1)})},exports.down=function(e){return e.schema.dropTableIfExists("project")};