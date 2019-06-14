exports.up = function (knex, Promise) {
  return knex.schema.table('beasts', function (table) {
    table.integer('locations_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('beasts', function (table) {
    table.dropColumn('locations_id')
  })
}
