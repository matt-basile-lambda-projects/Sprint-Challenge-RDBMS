
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, name: 'File Taxes', isCompleted: false, notes: 'LOREM IPSUM', description: 'TESTESTEST'},
        {project_id: 2, name: 'Load Machine', isCompleted: false, notes: 'LOREM IPSUM', description: 'TESTESTEST'},
        {project_id: 3, name: 'Make A Shopping List', isCompleted: false, notes: 'LOREM IPSUM', description: 'TESTESTEST'}
      ]);
    });
};
