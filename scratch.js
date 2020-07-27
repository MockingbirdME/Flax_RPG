const Character = require('./classes/Character');


const joe = new Character({
  name: "joe",
  level: 7, 
  strain: {name: "sapeen", options: {bonusAttribute: "perception"}},
  baseAttributeModifiers: {reflexes: 1},
  traitsList: ['adventurer:personalMovement,balance,run,meleeCombat,flurryOfBlows,powerAttack,animalHandling,ride,train,meleeCombat']
});

console.log(joe);
