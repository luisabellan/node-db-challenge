
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('info').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('info').insert([
        {
          name: 'project name here',
          description: 'task description',
          completed: true
        },
        {
          name: 'project name here',
          description: 'task description',
          completed: false
        },
        {
          name: 'project name here',
          description: 'task description',
          completed: true
        }
      ]);
    });
};
