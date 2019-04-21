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
        baseValue: "ranks in Discipline + ranks in magical aptitude."
    },
    defenseBonusMelee: {
        displayName: "Defense Bonus, Melee",
        description: "A value added to a character’s defense against melee attacks they are aware of.",
        baseValue: "ranks in melee combat + equipment bonuses."
    },
    defenseBonusRanged: {
        displayName: "Defense Bonus, Ranged",
        description: "A value added to a character’s defense against ranged attacks they are aware of.",
        baseValue: "ranks in awareness + ranks in dodge secondary skill (personal defense)."
    },
    initiative: {
        displayName: "Initiative",
        description: "A measure of how quickly the character acts.",
        baseValue: "sum of the character's current defense and current stamina."
    },
    reach: {
        displayName: "Reach",
        description: "",
        baseValue: "0 + size if positive."
    },
    resistanceConcussive: {
        displayName: "Resistance (concussive)",
        description: "The amount by which concusive damage is reduced when suffered by this character.",
        baseValue: "0 + body if positive."
    },
    resistanceDamageType: {
        displayName: "Resistance (damage type)",
        description: "The amount by which the specified damage type is reduced when suffered by this character.",
        baseValue: "0 for each other damage type."
    },
    size: {
        displayName: "Size",
        description: "How large the character is.",
        baseValue: "set by the character's strain."
    },
    speed: {
        displayName: "Speed",
        description: "How quickly the character moves.",
        baseValue: "set by strain plus ranks in the personal movement skill."
    },
    staminaMax: {
        displayName: "Stamina, Max",
        description: "The total number of stamina a character may spend before suffering fatigue.",
        baseValue: "10 + body stat + ranks in endurance + ranks in stamina (endurance)."
    },
    toughness: {
        displayName: "Toughness",
        description: "Some characters are so tough they all but ignore minor wounds.",
        baseValue: "1"
    },
    woundsMax: {
        displayName: "Wounds, Max",
        description: "The total number of wounds a character may suffer before they are in danger of dying from them.",
        baseValue: "5 + size, if positive, + body stat."
    }
};

module.exports = otherAttributesData;
