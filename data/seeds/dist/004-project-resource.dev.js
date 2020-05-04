"use strict";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex('project_resource')["delete"]().then(function () {
    // Inserts seed entries
    return knex('project_resource').insert([{
      resource_id: 2
    }, {
      resource_id: 1
    }, {
      resource_id: 3
    }]);
  });
};