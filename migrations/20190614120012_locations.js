exports.up = function (knex, Promise) {
  return knex.schema.createTable('Locations', (table) => {
    table.increments('id').primary()
    table.string('Location')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Locations')
}
