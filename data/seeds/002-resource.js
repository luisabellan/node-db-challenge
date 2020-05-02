
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {
          name: 'GitHub Pro Account',
          description: 'Fan Site for smurfs lovers',
        },
        {
          name: 'A meeting room',
          description: 'Room for meetings',
        },
        {
          name: 'Computer',
          description: 'Computer to make awesome projects',
        }
      ]);
    });
};
