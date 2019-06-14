exports.up = (knex, Promise) => {
  return knex.schema.createTable('beasts', (table) => {
    table.increments('id').primary()
    table.string('Name')
    table.string('MOM')
    table.string('Type')
    table.string('Characteristics')
    table.string('Desc')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('beasts')
}
