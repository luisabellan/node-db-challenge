
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          description: 'Make skeleton for blog',
          notes: 'Ask Virginia for tips',
          completed: true
        },
        {
          description: 'Buy a computer',
          notes: '',
          completed: false


        },
        {
          description: 'Set up a meeting with John Doe',
          notes: 'Mr Doe likes donuts!',
          completed: false

        }
      ]);
    });
};
