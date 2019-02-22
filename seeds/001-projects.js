
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Taxes', description: 'do my taxes', isCompleted: false, },
        { name: 'Laundry', description: 'do my laundry', isCompleted: false, },
        { name: 'Groceries', description: 'buy my weekly groceries', isCompleted: false, }
      ]);
    });
};
