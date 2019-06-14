exports.seed = function (knex, Promise) {
  return knex('beasts').del()
    .then(function () {
      return knex('beasts').insert([
        
        {
          id: 00001, name: 'Rathian', MOM: 'XXXXX', Type: 'Large Dragon', Characteristics: 'Aggressive, Protective, Relentless', Desc: 'A wyvern known as the "Queen of the Land".Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs.Be careful when stealing an egg from its nest, for a Rathian will chase an egg thief to the ends of the New World.Hunters can break the head, wings, and tail. Those are the weak spots', img_url: 'https://vignette.wikia.nocookie.net/monster-hunter/images/f/fb/Mh_rathian.jpg/revision/latest?cb=20180221161846&path-prefix=it',  locations_Id: 501
        },
        {
          id: 00002, name: 'Charlie The Unicorn', MOM: 'XXXXX', Type: 'The Unicorn', Characteristics: 'Sane, Fearful', Desc: 'Charlie is often annoyed and confused by the antics of Pink and Blue. He likes sleeping and watching tv. Even so, he had an oddly happy reaction to him being the banana king. Who is ugly.', img_url: 'https://vignette.wikia.nocookie.net/filmcow/images/d/de/Charlie_episode_4.png/revision/latest?cb=20170628143744', locations_Id: 502
        },  
        {
          id: 00003, name: 'Boar Lord', MOM: 'XXXX', Type: 'Gigantic Boar', Characteristics: 'Hairy, Aggressive, Thick skin', Desc: 'Very wild, loves coke, has silver-grey colored hair and skin that flahses under the moonlight',img_url: 'https://cdn.myanimelist.net/s/common/uploaded_files/1449812993-0c5b382bb01c8ca5bf0405717da946d8.png', locations_Id: 503
        },
        {
          id: 00004, name: 'Bowtruckles', MOM: 'XXX', Type: 'A small twig-like creature', Characteristics: 'Maximum of eight inches in height, made of bark and twigs with two small brown eyes', Desc: 'Peaceful and shy, unless its tree habitat is threatened. Has long, sharp fingers', img_url: 'https://images.ctfassets.net/bxd3o8b291gf/4jCWpQyXuoIYA0sAwGK6qE/7d1a6384262768e284da11d79cb8cc1e/FTB203_FANTASTIC_BEASTS_AND_WHERE_TO_FIND_THEM_A_NEW_HERO_FEATURETTE_2275.jpg?w=1200', locations_Id: 504
        },
        {
          id:'00005', name:'Thunderbird', MOM:'XXXX', Type:'Avian', Characteristics:'Sensitive, Difficult, Powerful', Desc:'The Thunderbird is a large, avian creature native to North America, and most commonly found in Arizona in the southwestern United States. A close relative of the Phoenix, the Thunderbird can create storms as it flies and is highly sensitive to danger. A house at Ilvermorny School of Witchcraft and Wizardry is named after this creature.', img_url: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d7/Thunderbird_concept_art.jpg/revision/latest?cb=20180813231220', locations_Id: 505
        },
        {
          id:'00006', name:'Basilisk', MOM:'XXXXX', Type:'Serpent', Characteristics:'Slippery, Snakey, Scary', Desc:'Of the many fearsome beasts and monsters that roam our land, there is none more curious or more deadly than the Basilisk, known also as the King of Serpents. This snake, which may reach gigantic size, and live many hundreds of years, is born from a chicken egg hatched beneath a toad. Its methods of killing are most wondrous, for aside from its deadly and venomous fangs, the Basilisk has a murderous stare, and all who are fixed with the beam of its eye shall suffer instant death. Spiders flee before the Basilisk, for it is their mortal enemy, and the Basilisk flees only from the crowing of the rooster, which is fatal to it.', img_url: 'https://i.ytimg.com/vi/pYLyu2Oioc0/maxresdefault.jpg', locations_Id: 502
        },
        {
          id:'00007', name:'Chimaera', MOM:'XXXXX', Type:'Beast', Characteristics:'Violent, Hostile', Desc:'It is usually depicted as a lion, with the head of a goat arising from its back, and a tail that might end with a snake head, and was one of the offspring of Typhon and Echidna and a sibling of such monsters as Cerberus and the Lernaean Hydra. The term "chimera" has come to describe any mythical or fictional animal with parts taken from various animals, or to describe anything composed of very disparate parts, or perceived as wildly imaginative, implausible, or dazzling.', img_url: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/1/1b/Monster_Manual_5e_-_Manticore_-_p213.jpg/revision/latest?cb=20141113120840',locations_Id: 503
        },
        {
          id:'00008', name:'Hungarian Horntail', MOM:'XXXXX', Type:'Dragon', Characteristics:'Nasty, Big yikes', Desc:'The Hungarian Horntail is a dragon native to Hungary and is considered to be one of the most dangerous dragon breeds, if not the most dangerous. It possesses black scales and is lizard-like in appearance.',img_url: 'https://images.pottermore.com/bxd3o8b291gf/3rrY5otE2cUoaoc4ckaKM8/c2e142feadaa4d951caa441bc1d19def/Dragon_WB_F4_HungarianHorntail_Illust_100615_Land.jpg?w=1200', locations_Id: 504
        },
        {
          id:'00009', name:'Frost Salamander', MOM:'XXX', Type:'Salamander', Characteristics:'Sneaky deaky, Slimy', Desc:'Frost Salamanders are a variety of magical salamanders that are closely associated with ice instead of fire. Small in size, these lizards have body temperatures below freezing, allowing them to survive extremely cold conditions. Frost Salamanders are particularly vulnerable to the Fire-Making Spell, but are resistant to Verdimillious and Red Sparks.', img_url: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/c/c4/FrostS5e.png/revision/latest?cb=20181125035153', locations_Id: 505
        }
      ])
    })
}

