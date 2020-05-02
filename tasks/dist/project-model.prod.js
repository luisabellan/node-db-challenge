"use strict";var db=require("../data/config");function find(){return db("project")}function findById(e){return db("project").where({project_id:e}).first()}function findMoreInfoById(e){var r=db("project as p").join("project as p","p.project_id","r.resource_id").join("resource as r","r.resource_id","t.id").select("p.project_id","p.name","p.description","p.completed"," t.id","t.description","t.notes","t.completed","r.resource_id","r.name","r.description");return db(r).where({project_id:e})}function add(r){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(db("project").insert(r).then(function(e){return findById(e[0])}));case 2:case"end":return e.stop()}})}function remove(e){return db("project").where({project_id:e}).first().del()}function update(r,t){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(db("project").where({project_id:t}).update(r));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}})}module.exports={find:find,add:add,remove:remove,findById:findById,update:update,findMoreInfoById:findMoreInfoById};