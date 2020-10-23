const uuidv4 = require('uuid').v4;
const util = require('util');
const db = require('../models/index.js');

const createError = require("http-errors");

const Strains = require('../data/strains');

const Skills = require('../data/skills');

const Notes = require('./Notes');
const Trait = require('./Trait');

const OTHER_ATTRIBUTES = [
  "armorValue",
  "defenseMax",
  "defenseBonusMelee",
  "defenseBonusMental",
  "defenseBonusRanged",
  "initiative",
  "reach",
  "resistances",
  "size",
  "speed",
  "staminaMax",
  "woundsMax",
  "actionPoints",
  "reactionPoints"
];

// Build default skills with all ranks set to zero.
const DEFAULT_SKILLS = () => {
  const defaultSkills = {};
  Object.keys(Skills).forEach(skill => {
    defaultSkills[skill] = {rank: 0, secondarySkills: {}};
    Object.keys(Skills[skill].secondarySkills).forEach(secondarySkill => {
      defaultSkills[skill].secondarySkills[secondarySkill] = {rank: 0};
    });
  });
  return defaultSkills;
};


class Character {
  
  static async load(id) {
    return db.Character.findOne({where: {id}})
      .then(response => response);
  }

  constructor({id, name, level = 0, strain, traitsList = [], baseAttributeModifiers = {}}) {
    
    if (baseAttributeModifiers && typeof baseAttributeModifiers != 'object') throw createError(400, 'baseAttributeModifiers must be an object or undefined.');
    
    this.baseAttributeModifiers = baseAttributeModifiers;

    // Set initial primaryAttributes object.
    this._primaryAttributes = {};
    
    this.applyBaseAttributeModifiers();

    // Set initial skills object.
    this._skills = DEFAULT_SKILLS();
    
    // Store notes for display.
    this._notes = new Notes();

    // Store variables for use elsewhere.
    this._variables = {};
    
    // Store skill check modifiers.
    this._skillCheckModifiers = {};
    
    // Store armor details.
    this._armor = [];

    // TODO validate data for all params.
    
    // If no UID is passed this is a new character, generate a UUID for them.
    if (!id) id = uuidv4();
    this._id = id;

    // If name is missing or invalid default it. TODO eventually have this reflect the user as well (this enhancement is why we don't just default in the parameters). 
    if (!name || typeof name !== "string") name = 'unnamed character';
    this._name = name;

    // Set the character's level.
    this._level = parseInt(level, 10);

    // Apply the character's strain.
    this.strain = strain || 'unknown';
    
    // Store the traits list and apply each trait. 
    for (const traitDetails of traitsList) {
      this.applyTrait(traitDetails);
    }
  }
  
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    // TODO validate param.
    this._name = name;
  }
  
  get baseAttributeModifiers() {
    
    return this._baseAttributeModifiers;
  }

  set baseAttributeModifiers(baseAttributeModifiers) {
    // TODO validate param.
    if (!baseAttributeModifiers.penalty) baseAttributeModifiers.penalty = [];
    this._baseAttributeModifiers = baseAttributeModifiers;
  }
  
  applyBaseAttributeModifiers() {
    if (this.baseAttributeModifiers.bonus) this.modifyAttribute(this.baseAttributeModifiers.bonus, 1);
    for (const attribute of this.baseAttributeModifiers.penalty) {
      this.modifyAttribute(attribute, -1);
    }
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
          if (trait.hasOwnProperty('apply')) trait.apply(this);
          else console.log(`trait "${traitName}" has no apply function.`);
        }
      }
    }
  }
  
  get level() {
    return this._level;
  }
  
  get traitEntitlements() {
    const totalAlotments = this.level + (this.getVariable('extraEntitledTraits') || 0);
    const totalConsumed = this.traits.filter(trait => Trait.get(trait.id).type !== "Character Type").length;
    const heroicAlotments = 1 + Math.floor(this.level / 5) + (this.getVariable('extraEntitledHeroicTraits') || 0);
    const heroicConsumed = this.traits.filter(trait => trait.keywords.includes('Heroic')).length;
    const epicAlotments = Math.floor(this.level / 25) + (this.getVariable('extraEntitledEpicTraits') || 0);
    const epicConsumed = this.traits.filter(trait => trait.keywords.includes('Epic')).length;
    return {
      total: {allotted: totalAlotments, consumed: totalConsumed, available: totalAlotments - totalConsumed}, 
      heroic: {allotted: heroicAlotments, consumed: heroicConsumed, available: heroicAlotments - heroicConsumed},  
      epic: {allotted: epicAlotments, consumed: epicConsumed, available: epicAlotments - epicConsumed}
    };
  }
  
  get traitsList() {
    // Note: Strain traits are not listed here, these are the selected traits.
    return this.traits.map(trait => ({name: trait.id, selectedOptions: trait.selectedOptions}));
  }
  
  get traits() {
    return this._traits || [];
  }
  
  applyTrait({name, selectedOptions} = {}) {
    // TODO validate that required options are provided.
    const trait = Trait.get(name);
    
    // Enforce prerequisits.
    if (!trait.isCharacterEligible(this)) return;
    
    trait.apply(this, selectedOptions);
    
    if (!this._traits) this._traits = [];
    
    this._traits.push(trait.withOptions(this, selectedOptions));
  }
  
  get availableTraits() {
    return Trait.getAllAvailableToCharacter(this);
  }
  
  // VARIABLE STORAGE:
  getVariable(variable, {key, variableIsObject} = {}) {
    if (this._variables[variable] && !key) return this._variables[variable];
    if (this._variables[variable] && key && this._variables[variable][key]) return this._variables[variable][key];
    if (variableIsObject) return {};
    if (typeof variable === 'string') return '';
    return 0;
  }
  
  /* eslint-disable complexity */
  updateVariable(variable, value, {key, type = 'int'} = {}) {
    // Set base value of variable to empty object or type's default value. 
    if (!this._variables[variable] && key) this._variables[variable] = {};
    else if (!this._variables[variable] && type === 'array') this._variables[variable] = [];
    else if (!this._variables[variable] && type === 'int') this._variables[variable] = 0;
    
    // If key doesn't exist, set it to the types default value.
    if (key && !this._variables[variable][key] && type === 'int') this._variables[variable][key] = 0;
    if (key && !this._variables[variable][key] && type === 'array') this._variables[variable][key] = [];
    
    // Update the targeted value with the passed value.
    if (key && type === "int") this._variables[variable][key] += value;
    else if (key && type === "array") this._variables[variable][key].push(value);
    else if (key && type === "string") this._variables[variable][key] = value;
    else if (type === "int") this._variables[variable] += value;
    else if (type === "array") this._variables[variable].push(value);
    else if (type === "string") this._variables[variable] = value;
  }
  /* eslint-enable complexity */
  
  // SKILL CHECK MODIFIER STORAGE:
  getSkillCheckModifier(skillCheckName) {
    if (this._skillCheckModifiers[skillCheckName]) return this._skillCheckModifiers[skillCheckName];
    return {dieModifier: 0, flatModifier: 0};
  }
  
  updateSkillCheckModifier(skillCheckName, {dieModifier = 0, flatModifier = 0} = {}) {
    if (!this._skillCheckModifiers[skillCheckName]) this._skillCheckModifiers[skillCheckName] = {dieModifier: 0, flatModifier: 0};
    this._skillCheckModifiers[skillCheckName].dieModifier += dieModifier;
    this._skillCheckModifiers[skillCheckName].flatModifier += flatModifier;
  }
  
  // ARMOR:
  addArmor({armorName, armorValue = 0, resistances = {}} = {}) {
    // TODO add a piece of armor.
    const previousArmorStats = this.calculateArmor();
    this._armor.push({armorName, armorValue, resistances});
    const newArmorStats = this.calculateArmor();
    
    if (previousArmorStats.armorValue !== newArmorStats.armorValue) this.updateVariable(
      "armorValueAdjustment", 
      newArmorStats.armorValue - previousArmorStats.armorValue
    );
    
    const allResistanceTypes = Object.keys(Object.assign({}, ...[previousArmorStats.resistances, newArmorStats.resistances]));
    for (const resistance of allResistanceTypes) {
      if (!previousArmorStats.resistances[resistance]) this.updateVariable("resistances", newArmorStats.resistances[resistance], {key: resistance});
      else if (!newArmorStats.resistances[resistance]) this.updateVariable("resistances", -previousArmorStats.resistances[resistance], {key: resistance});
      else this.updateVariable("resistances", newArmorStats.resistances[resistance] - previousArmorStats.resistances[resistance], {key: resistance});
    }
  }
  
  removeArmor(armorKey) {
    // TODO remove a piece of armor.
  }
  
  calculateArmor() {
    let highestArmorValue = 0;
    let armorValueBonus = 0;
    const resistances = {};
    let requiredTraining = 0;
    let perceptionPenalty = 0;
    
    this.getArmorList().forEach(armorInstance => {
      const armorValue = armorInstance.armorValue || 0;
      const resistanceList = armorInstance.resistances || {};
      if (armorValue > highestArmorValue) {
        if (highestArmorValue > 0) armorValueBonus++;
        highestArmorValue = armorValue;
      }
      
      for (const resistance in resistanceList) {
        if (!resistanceList.hasOwnProperty(resistance)) continue;
        if (!resistances[resistance]) resistances[resistance] = 0;
        resistances[resistance] += resistanceList[resistance];
      }
      
      if (armorInstance.requiredTraining) requiredTraining += armorInstance.requiredTraining;
      if (armorInstance.perceptionPenalty) perceptionPenalty += armorInstance.perceptionPenalty;
    });
    
    return {
      armorValue: highestArmorValue + armorValueBonus,
      resistances,
      requiredTraining,
      perceptionPenalty
    };
  }
  
  getArmorList() {
    return this._armor;
  }
  
  
  // PRIMARY ATTRIBUTES:
  get primaryAttributes() {
    const {body, reflexes, perception, mind} = this;
    return {body, reflexes, perception, mind};
  }
  
  get body() {return this._primaryAttributes.body || 0;} 
  
  get reflexes() {return this._primaryAttributes.reflexes || 0;} 
  
  get perception() {return this._primaryAttributes.perception || 0;} 
  
  get mind() {return this._primaryAttributes.mind || 0;}
  
  modifyAttribute(attribute, modifier) {
    if (attribute in this._primaryAttributes) this._primaryAttributes[attribute] += modifier;
    else this._primaryAttributes[attribute] = modifier;
  }
  
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
    defenseMax += 8 + this.reflexes + this.perception + this._skills.personalDefense.rank;
    return defenseMax;
  }
  
  get defenseBonusMelee() {
    let defenseBonusMelee = this.getVariable('defenseBonusMeleeAdjustment');
    defenseBonusMelee += this._skills.meleeCombat.rank;
    return defenseBonusMelee;
  }
  
  get defenseBonusMental() {
    let defenseBonusMental = this.getVariable('defenseBonusMentalAdjustment');
    defenseBonusMental += this.mind + this._skills.discipline.rank;
    return defenseBonusMental;
  }
  
  get defenseBonusRanged() {
    let defenseBonusRanged = this.getVariable('defenseBonusRangedAdjustment');
    defenseBonusRanged += this._skills.awareness.rank - this.size;
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
  
  get resistances() {
    const resistances = this.getVariable('resistances', {variableIsObject: true});
    if (!resistances.concussive) resistances.concussive = 0;
    if (this.body > 0) resistances.concussive += this.body;
    if (this.size > 0) resistances.concussive += this.size;
    return resistances;
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
  
  get actionPoints() {
    return this.getVariable('actionPointsAdjustment');
  }
  
  get reactionPoints() {
    return this.getVariable('reactionPointsAdjustment');
  }
  
  // SKILLS 
  get skills() {
    return this._skills;
  }
  
  setSkill(skill, rank) {
    if (!this.skills[skill]) throw new Error(`Skill ${skill} doesn't exist.`);
    this._skills[skill].rank = rank;
  }
  
  setSecondarySkill(baseSkill, secondarySkill, rank) {
    const skill = this._skills[baseSkill];
    if (!skill) throw new Error(`Skill ${baseSkill} doesn't exist.`);
    if (!skill.secondarySkills[secondarySkill]) throw new Error(`${secondarySkill} is not  a secondary  skill of ${baseSkill}.`);
    
    if (!skill.secondarySkills[secondarySkill]) skill.secondarySkills[secondarySkill] = {};
    skill.secondarySkills[secondarySkill].rank = rank;
  }
  
  // NOTES 
  get notes() {
    return this._notes;
  }
  
  addNote({name, description} = {}) {
    this._notes.add({name, description});
  }
  
  addTraitAsNote({strainTrait, strainName, traitName} = {}) {
    // TODO Refactor strain traits so they're not separate. 
    if (strainTrait) {
      const {displayName, description} = Strains[strainName].strainTraits[traitName];
      return this.addNote({name: displayName, description});
    }
    
    const {displayName, description} = Trait.get(traitName);
    
    if (!displayName) throw new Error(`Could not find trait with name ${traitName}`);
    
    this.addNote({name: displayName, description});
  }
  
  replaceNote({name, description} = {}) {
    this._notes.replace({name, description});
  }
  
  deleteNote(name) {
    this._notes.delete(name);
  }
  
  /**
   * Converts this to a generic object, suitable for storage.
   * @return {object}
   */
  toJSON() {
    const {id, name, strain, level, traitEntitlements, traitsList, traits, availableTraits, baseAttributeModifiers, primaryAttributes, otherAttributes, skills, notes} = this;
    return {id, name, strain, level, traitEntitlements, traitsList, traits, availableTraits, baseAttributeModifiers, primaryAttributes, otherAttributes, skills, notes};
  }
  
  async save() {
    const [characterBaseData] = await db.Character.findOrCreate({where: {id: this.id}});
    
    characterBaseData.name = this.name;
    characterBaseData.level = this.level;
    characterBaseData.strain = this.strain;
    characterBaseData.traitsList = this.traitsList;
    characterBaseData.baseAttributeModifiers = this._baseAttributeModifiers;

    await characterBaseData.save();
    return this;
  }

  /**
   * Overrides the default util.inspect behavior to use {@link Character#toJSON} instead.
   */
  [util.inspect.custom]() {
    return this.toJSON();
  }
}


module.exports = Character;
