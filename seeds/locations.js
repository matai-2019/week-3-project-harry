exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {
          id: 501, locations: 'Under the bed'

        },
        {
          id: 502, locations: 'Global'

        },
        {
          id: 503, locations: 'In the dream'

        },
        {
          id: 504, locations: 'Australia'

        },
        {
          id: 505, locations: 'Antartica'

        }
      ])
    })
}
