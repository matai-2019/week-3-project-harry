exports.up = (knex, Promise) => {
  return knex.schema.createTable('beasts', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('MOM')
    table.string('type')
    table.string('characteristics')
    table.string('Desc')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beasts')
}
