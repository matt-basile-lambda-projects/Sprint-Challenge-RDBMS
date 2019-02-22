
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl =>{
        tbl.increments();
        tbl.integer('project_id').unsigned().references('id').inTable('projects')
        .onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.string('name', 250).notNullable();
        tbl.text('description');
        tbl.text('notes');
        tbl.boolean('isCompleted')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('actions');

};
