let otherAttributesData = {
    armorValue: {
        displayName: "Armor Value",
        description: "The difficulty to pierce the character's flesh with penetrating weapons, if the damage from a penetrating weapon is less than this value the weapon inflicts concussive damage instead.",
        baseValue: "0"
    },
    defenseMax: {
        displayName: "Defense, Max",
        description: "The base difficulty for how hard a character is to hit, can be reduced or recovered by various effects.",
        baseValue: "8 + reflexes stat + perception stat + ranks in the personal defense skill - size."
    },
    defenseBonusMagic: {
        displayName: "Defense Bonus, Magic",
        description: "A value added to a character’s defense against arcanely targeted attacks.",
        baseValue: "ranks in Discipline."
    },
    defenseBonusMelee: {
        displayName: "Defense Bonus, Melee",
        description: "A value added to a character’s defense against melee attacks they are aware of.",
        baseValue: "ranks in melee combat."
    },
    defenseBonusRanged: {
        displayName: "Defense Bonus, Ranged",
        description: "A value added to a character’s defense against ranged attacks they are aware of.",
        baseValue: "ranks in awareness."
    },
    initiative: {
        displayName: "Initiative",
        description: "A measure of how quickly the character acts.",
        baseValue: "sum of the character's reflexes, perception, and mind."
    },
    resistanceConcussive: {
        displayName: "Resistance (concussive)",
        description: "The amount by which concusive damage is reduced when suffered by this character.",
        baseValue: "0 + body if positive + size if positive."
    },
    resistanceDamageType: {
        displayName: "Resistance (damage type)",
        description: "The amount by which the specified damage type is reduced when suffered by this character.",
        baseValue: "0 for each other damage type."
    },
    speed: {
        displayName: "Speed",
        description: "How quickly the character moves.",
        baseValue: "set by strain plus ranks in the personal movement skill."
    },
    staminaMax: {
        displayName: "Stamina, Max",
        description: "The total number of stamina a character may spend before suffering fatigue.",
        baseValue: "set by the character's _character type_ trait, for adventurers 10."
    },
    woundsMax: {
        displayName: "Wounds, Max",
        description: "The total number of wounds a character may suffer before they are in danger of dying from them.",
        baseValue: "set by the character's _character type_ trait, for adventurers 4."
    }
};

module.exports = otherAttributesData;
