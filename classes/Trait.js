const rawTraitsData = require("../data/traits");
/**
 * List of all available traits.
 * @type {Map<string, object>}
 */
const traits = new Map();

// Load all traits.
Object.keys(rawTraitsData).forEach(id => {
  traits.set(id, { ...rawTraitsData[id], id });
});

class Trait {
  static get(id) {
    return new Trait(traits.get(id));
  }
  
  static getAllAvailableToCharacter(character) {
    return Array.from(traits.keys())
      .map(id => new Trait(traits.get(id)))
      .filter(trait => trait.isCharacterEligible(character, {ignoreAllotment: true}))
      .map(trait => trait.withOptions(character));
  }

  constructor({
    id,
    displayName,
    type,
    requirements,
    requirementsDescription,
    keywords,
    description,
    options,
    isCharacterEligible,
    apply
  }) {
    this._id = id;

    this._displayName = displayName;

    this._type = type;

    this._requirements = requirements;

    this._requirementsDescription = requirementsDescription;

    this._keywords = keywords;

    this._description = description;

    this._options = options;

    this._isCharacterEligible = isCharacterEligible;

    this._apply = apply;
  }
  
  get id() {
    return this._id;
  }
  
  get displayName() {
    return this._displayName;
  }
  
  get type() {
    return this._type;
  }

  get requirementsDescription() {
    return this._requirementsDescription;
  }
  
  get keywords() {
    return this._keywords;
  }

  get description() {
    return this._description;
  }
  
  get isHeroic() {
    return this._keywords.includes("Heroic");
  }
  
  get isEpic() {
    return this._keywords.includes("Epic");
  }

  apply(character, options) {
    if (!this._apply) return;
    
    this._apply(character, options);
  }
  
  getOptions(character, selectedOptions) {
    if (!this._options) return;
    return this._options(character, selectedOptions);
  }
  
  isCharacterEligible(character, options) {
    if (!this._apply) console.log(`No Apply function for ${this.displayName}`);
    if (!this._isCharacterEligible) return false;
    if (!this._apply) return false;
    if (character.traitEntitlements.total.allotted < character.traits.length && !options.ignoreAllotment) return false;
    if (this.isHeroic && !character.traitEntitlements.heroic.available) return false;
    if (this.isEpic && !character.traitEntitlements.epic.available) return false;

    return this._isCharacterEligible(character);
  }
  
  withOptions(character, selectedOptions = {}) {
    const {
      id,
      displayName,
      type,
      requirementsDescription,
      keywords,
      description
    } = this;
    
    const options = this.getOptions(character, selectedOptions);
    
    return {
      id,
      displayName,
      type,
      requirementsDescription,
      keywords,
      description,
      options,
      selectedOptions
    };
  }

}

module.exports = Trait;
