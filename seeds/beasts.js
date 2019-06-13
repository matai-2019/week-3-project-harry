exports.seed = function (knex, Promise) {
  return knex('beasts').del()
    .then(function () {
      return knex('beasts').insert([

        {
          id: 00001, name: 'Rathian', MOM: '5', Type: 'Large Dragon', Characteristics: 'Aggressive, Protective, Relentless', Desc: 'A wyvern known as the "Queen of the Land".Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs.Be careful when stealing an egg from its nest, for a Rathian will chase an egg thief to the ends of the New World.Hunters can break the head, wings, and tail. Those are the weak spots'},
        {
          id: 00002, name: 'Charlie The Unicorn', MOM: '5', Type: 'The Unicorn', Characteristics: 'Sane, Fearful', Desc: 'Charlie is often annoyed and confused by the antics of Pink and Blue. He likes sleeping and watching tv. Even so, he had an oddly happy reaction to him being the banana king. Who is ugly.'
        }  
        {
          id: 00003, name: 'Boar Lord', MOM: '4', Type: 'Gigantic Boar', Characteristics: 'Hairy, Aggressive, Thick skin', Desc: ''},
      ])
    })
}
