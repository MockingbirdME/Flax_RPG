const uuidv4 = require('uuid').v4;
const util = require('util');

const Strains = require('../data/strains');

const Skills = require('../data/skills');

const Traits = require('../data/traits');


const PRIMARY_ATTRIBUTES = ['body', 'reflexes', 'perception', 'mind'];
const OTHER_ATTRIBUTES = [
  "armorValue",
  "defenseMax",
  "defenseBonusMelee",
  "defenseBonusMental",
  "defenseBonusRanged",
  "initiative",
  "reach",
  "resistanceConcussive", // TODO consider adding other resistances 
  "size",
  "speed",
  "staminaMax",
  "woundsMax"
];

// Build default skills with all ranks set to zero.
const DEFAULT_SKILLS = {};
Object.keys(Skills).forEach(skill => {
  DEFAULT_SKILLS[skill] = {rank: 0, secondarySkills: {}};
  Object.keys(Skills[skill].secondarySkills).forEach(secondarySkill => {
    DEFAULT_SKILLS[skill].secondarySkills[secondarySkill] = {rank: 0};
  });
});


class Character {

  constructor({uid, name, level, strain, traitsList, baseAttributeModifiers}) {
    // Initialize all primary attributes based on the passed baseAttributeModifiers.
    this._primaryAttributes = PRIMARY_ATTRIBUTES.reduce((acc, attribute) => ({...acc, [attribute]: baseAttributeModifiers[attribute] || 0}), {});
    
    // Set initial skills object.
    this._skills = DEFAULT_SKILLS;
    
    // Store variables for use elsewhere.
    this._variables = {};
    
    // TODO validate data for all params.
    
    // If no UID is passed this is a new character, generate a UUID for them.
    if (!uid) uid = uuidv4();
    this._uid = uid;
    
    // If name is missing or invalid default it. TODO eventually have this reflect the user as well (this enhancement is why we don't just default in the parameters). 
    if (!name || typeof name !== "string") name = 'unnamed character';
    this._name = name;
    
    // Set the character's level.
    this._level = level;

    // Store the traits list and apply each trait. 
    this._traitsList = traitsList || [];
    for (const traitName of traitsList) {
      this.applyTrait(traitName);
    }
    
    // Apply the character's strain.
    this.strain = strain || 'unknown';
  
    // TODO Apply traits. 
    // this.applyTraits()
  }
  
  get uid() {
    return this._uid;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    // TODO validate param.
    this._name = name;
  }
  
  get strain() {
    return this._strain;
  }

  set strain(strain) {
    if (typeof strain === 'string') strain = {name: strain};
    // TODO validate param.
    const strainData = Strains[strain.name];
    
    // TODO get and remove traits from any previous strain. 
    if (this._strain && this._strain.name === strain.name) return;
    this._strain = strain;
    
    // If we have no data on this strain we're done after setting the name.
    if (!strainData) return;
    
    // Apply the strain's attribute modifiers.
    if (strainData.apply) strainData.apply(this, strain.options);
    
    // Add the strains traits to the character.
    const {strainTraits} = strainData; 
    if (strainTraits) {
      for (const traitName in strainTraits) {
        if ({}.hasOwnProperty.call(strainTraits, traitName)) {
          const trait = strainTraits[traitName];
          trait.apply(this);
        }
      }
    }
  }
  
  get level() {
    return this._level;
  }
  
  get traitEntitlements() {
    const totalAlotments = this._level + this.getVariable('extraEntitledTraits');
    const totalConsumed = this._traits.length;
    const heroicAlotments = 1 + Math.floor(this._level / 5) + this.getVariable('extraEntitledHeroicTraits');
    const heroicConsumed = this._traits.filter(trait => trait.keywords.includes('Heroic')).length;
    const epicAlotments = Math.floor(this._level / 25) + this.getVariable('extraEntitledEpicTraits');
    const epicConsumed = this._traits.filter(trait => trait.keywords.includes('Epic')).length;
    return {
      total: {allotted: totalAlotments, consumed: totalConsumed, available: totalAlotments - totalConsumed}, 
      heroic: {allotted: heroicAlotments, consumed: heroicConsumed, available: heroicAlotments - heroicConsumed},  
      epic: {allotted: epicAlotments, consumed: epicConsumed, available: epicAlotments - epicConsumed}
    };
  }
  
  get traitsList() {
    // TODO add the character's strain traits to the traits list. 
    return this._traitsList;
  }
  
  applyTrait(traitName) {
    const [baseName, option] = traitName.split(':');
    const trait = Traits[baseName];
    // TODO consider enforcing prerequisits here.
    if ({}.hasOwnProperty.call(trait, 'apply')) trait.apply(this, option);
    if (!this._traits) this._traits = [];
    this._traits.push(trait);
  }
  
  // VARIABLE STORAGE:
  getVariable(variable) {
    if (this._variables[variable]) return this._variables[variable];
    return 0;
  }
  
  updateVariable(variable, modifier) {
    if (!this._variables[variable]) this._variables[variable] = 0;
    this._variables[variable] += modifier;
  }
  
  
  // PRIMARY ATTRIBUTES:
  get primaryAttributes() {return this._primaryAttributes;}
  
  get body() {return this._primaryAttributes.body;} 
  
  get reflexes() {return this._primaryAttributes.reflexes;} 
  
  get perception() {return this._primaryAttributes.perception;} 
  
  get mind() {return this._primaryAttributes.mind;}
  
  // OTHER ATTRIBUTES:
  get otherAttributes() {
    const otherAttributes = {};
    OTHER_ATTRIBUTES.forEach(attribute => {
      otherAttributes[attribute] = this[attribute];
    });
    return otherAttributes;
  }
  
  get armorValue() {
    return this.getVariable('armorValueAdjustment');
  }
  
  get defenseMax() {
    let defenseMax = this.getVariable('defenseMaxAdjustment');
    defenseMax += 8 + this.perception + this._skills.personalDefense.rank;
    return defenseMax;
  }
  
  get defenseBonusMelee() {
    let defenseBonusMelee = this.getVariable('defenseBonusMeleeAdjustment');
    defenseBonusMelee += this.reflexes + this._skills.meleeCombat.rank;
    return defenseBonusMelee;
  }
  
  get defenseBonusMental() {
    let defenseBonusMental = this.getVariable('defenseBonusMentalAdjustment');
    defenseBonusMental += this.mind + this._skills.discipline.rank;
    return defenseBonusMental;
  }
  
  get defenseBonusRanged() {
    let defenseBonusRanged = this.getVariable('defenseBonusRangedAdjustment');
    defenseBonusRanged += this.reflexes + this._skills.awareness.rank - this.size;
    return defenseBonusRanged;
  }
  
  get initiative() {
    let initiative = this.getVariable('initiativeAdjustment');
    initiative += this.reflexes + this.perception + this.mind + this._skills.awareness.rank + this._skills.discipline.rank + this._skills.personalMovement.rank;
    return initiative;
  }
  
  get reach() {
    let reach = this.getVariable('reachAdjustment');
    if (this.size > 0) reach += this.size;
    return reach;
  }
  
  get resistanceConcussive() {
    let resistance = this.getVariable('resistanceConcussiveAdjustment');
    if (this.body > 0) resistance += this.body;
    if (this.size > 0) resistance += this.size;
    return resistance;
  } 
  
  // TODO consider adding other resistances ()
  
  get size() {
    return this.getVariable('sizeAdjustment');
  }
  
  get speed() {
    let speed = this.getVariable('speedAdjustment');
    speed += this._skills.personalMovement.rank;
    return speed;
  }
  
  get staminaMax() {
    return this.getVariable('staminaMaxAdjustment');
  }
  
  get woundsMax() {
    return this.getVariable('woundsMaxAdjustment');
  }
  
  // SKILLS 
  get skills() {
    return this._skills;
  }
  
  /**
   * Converts this to a generic object, suitable for storage.
   * @return {object}
   */
  toJSON() {
    const {uid, name, strain, level, traitEntitlements, traitsList, primaryAttributes, otherAttributes, skills} = this;
    return {uid, name, strain, level, traitEntitlements, traitsList, primaryAttributes, otherAttributes, skills};
  }

  /**
   * Overrides the default util.inspect behavior to use {@link User#toJSON} instead.
   */
  [util.inspect.custom]() {
    return this.toJSON();
  }
}


module.exports = Character;
