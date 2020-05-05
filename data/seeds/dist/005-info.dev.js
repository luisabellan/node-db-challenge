"use strict";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('info').truncate().then(function () {
    // Inserts seed entries
    return knex('info').insert([{
      name: 'project name here1',
      description: 'task description',
      completed: true
    }, {
      name: 'project name here2',
      description: 'task description',
      completed: false
    }, {
      name: 'project name here3',
      description: 'task description',
      completed: true
    }]);
  });
};