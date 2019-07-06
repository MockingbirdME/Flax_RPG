const BASE_STATS = {
  _damage: 4,
  _offHanded: false,
  _penaltyDice: 0,
  _twoHandedOption: false,
  _twoHandedRequired: false,
  _traits: []
};

const BALANCE_ENUM = ["balanced", "light", "pole-arm", "protective", "weighted"];
const QUALITY_ENUM = ["crude", "simple", "standard"];

// TODO import all weapon data items and convert them for export.

class MeleeWeapon {

  constructor({name, quality = 'standard', balance, size, type, options = {}}) {
    // Initialize Melee Weapon Base Stats.
    Object.keys(BASE_STATS).forEach(key => this[key] = BASE_STATS.key);

    // TODO throw errors if not all needed values are passed.

    // If name is missing or invalid throw an error, otherwise set it.
    if (!name || typeof name !== "string") throw new Error("name is a required property and must be a non-empty string.");
    this._name = name;

    if (QUALITY_ENUM.indexOf(quality.toLowerCase()) === -1) throw new Error(`Quality property must be left blank of be one of: [${QUALITY_ENUM.join(", ")}].`);
    this._quality = quality;
    this._traits.push(quality);

    if (BALANCE_ENUM.indexOf(quality.toLowerCase()) === -1) throw new Error(`Balance property must be left blank of be one of: [${BALANCE_ENUM.join(", ")}].`);
    this._balance = balance;
    this._traits.push(balance);

    this._balance = balance;
    this._size = size;
    this._type = type;
    this._options = options;


    // TODO additional successes
    this._additionalSuccesses = "???";

    // TODO calculate APV
    this._apv = "???";

    // TODO calculate Damage Type
    this._damageType = "???";

    // TODO calculate Penalty Dice
    this._penaltyDice = "???";

    // TODO calculate Parrying boolean.
    this._parrying = false;

    // TODO calculate special Rules
    this._specialRules = "???";

    // TODO calculate Parrying Bonus
    this._parryingBonus = "???";

    // TODO calculate reach
    this._reach = ["???", "???"];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    // TODO validate param.
    this._name = name;
  }

  get damage() {
    return this._damage;
  }

  get penaltyDice() {
    return this._penaltyDice;
  }

  get parrying() {
    if (this.quality === 'crude') return false;

    return false;
  }

}


module.exports = MeleeWeapon;
