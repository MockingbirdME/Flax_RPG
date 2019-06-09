
// TODO import all weapon data items and convert them for export.

class MeleeWeapon {

  constructor({name, quality = 'standard', balance, size, type, options = {}}) {

    // TODO throw errors if not all needed values are passed.
    this._name = name;
    this._quality = quality;
    this._balance = balance;
    this._size = size;
    this._type = type;
    this._options = options;

    // TODO calculate Damage
    this._damage = "???";

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

}


module.exports = MeleeWeapon;
