
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl =>{
        tbl.increments();
        tbl.string('name', 250).notNullable();
        tbl.text('description');
        tbl.boolean('isCompleted')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('projects');

};
