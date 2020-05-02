
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          name: 'Smurfs',
          description: 'Fan Site for smurfs lovers',
          completed: false
        },
        {
          name: 'Blog for Good',
          description: 'Virginia React site',
          completed: false
        },
        {
          name: 'ChessNoobsters',
          description: 'Learn to play chess with this awesome app',
          completed: false
        }
      ]);
    });
};
