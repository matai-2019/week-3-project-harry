exports.seed = function (knex, Promise) {
  return knex('beasts').del()
    .then(function () {
      return knex('beasts').insert([

        {
          id: 00001, name: 'Rathian', MOM: 'XXXXX', Type: 'Large Dragon', Characteristics: 'Aggressive, Protective, Relentless', Desc: 'A wyvern known as the "Queen of the Land".Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs.Be careful when stealing an egg from its nest, for a Rathian will chase an egg thief to the ends of the New World.Hunters can break the head, wings, and tail. Those are the weak spots'
        },
        {
          id: 00002, name: 'Charlie The Unicorn', MOM: 'XXXXX', Type: 'The Unicorn', Characteristics: 'Sane, Fearful', Desc: 'Charlie is often annoyed and confused by the antics of Pink and Blue. He likes sleeping and watching tv. Even so, he had an oddly happy reaction to him being the banana king. Who is ugly.'
        },  
        {
          id: 00003, name: 'Boar Lord', MOM: 'XXXX', Type: 'Gigantic Boar', Characteristics: 'Hairy, Aggressive, Thick skin', Desc: 'Very wild, loves coke, has silver-grey colored hair and skin that flahses under the moonlight'
        },
        {
          id: 00004, name: 'Bowtruckles', MOM: 'XXX', Type: 'A small twig-like creature', Characteristics: 'Maximum of eight inches in height, made of bark and twigs with two small brown eyes', Desc: 'Peaceful and shy, unless its tree habitat is threatened. Has long, sharp fingers'
        },
        {
          id:'00005', name:'Thunderbird', MOM:'XXXX', Type:'Avian', Characteristics:'Sensitive, Difficult, Powerful', Desc:'The Thunderbird is a large, avian creature native to North America, and most commonly found in Arizona in the southwestern United States. A close relative of the Phoenix, the Thunderbird can create storms as it flies and is highly sensitive to danger. A house at Ilvermorny School of Witchcraft and Wizardry is named after this creature.'
        },
        {
          id:'00006', name:'Basilisk', MOM:'XXXXX', Type:'Serpent', Characteristics:'Slippery, Snakey, Scary', Desc:'Of the many fearsome beasts and monsters that roam our land, there is none more curious or more deadly than the Basilisk, known also as the King of Serpents. This snake, which may reach gigantic size, and live many hundreds of years, is born from a chicken egg hatched beneath a toad. Its methods of killing are most wondrous, for aside from its deadly and venomous fangs, the Basilisk has a murderous stare, and all who are fixed with the beam of its eye shall suffer instant death. Spiders flee before the Basilisk, for it is their mortal enemy, and the Basilisk flees only from the crowing of the rooster, which is fatal to it.'
        },
        {
          id:'00007', name:'Chimaera', MOM:'XXXXX', Type:'Beast', Characteristics:'Violent, Hostile', Desc:'It is usually depicted as a lion, with the head of a goat arising from its back, and a tail that might end with a snake head, and was one of the offspring of Typhon and Echidna and a sibling of such monsters as Cerberus and the Lernaean Hydra. The term "chimera" has come to describe any mythical or fictional animal with parts taken from various animals, or to describe anything composed of very disparate parts, or perceived as wildly imaginative, implausible, or dazzling.'
        },
        {
          id:'00008', name:'Hungarian Horntail', MOM:'XXXXX', Type:'Dragon', Characteristics:'Nasty, Big yikes', Desc:'The Hungarian Horntail is a dragon native to Hungary and is considered to be one of the most dangerous dragon breeds, if not the most dangerous. It possesses black scales and is lizard-like in appearance.'
        },
        {
          id:'00009', name:'Frost Salamander', MOM:'XXX', Type:'Salamander', Characteristics:'Sneaky deaky, Slimy', Desc:'Frost Salamanders are a variety of magical salamanders that are closely associated with ice instead of fire. Small in size, these lizards have body temperatures below freezing, allowing them to survive extremely cold conditions. Frost Salamanders are particularly vulnerable to the Fire-Making Spell, but are resistant to Verdimillious and Red Sparks.'
        }
      ])
    })
}
