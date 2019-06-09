let primaryAttributesData = {
    kneeling: {
        displayName: "Kneeling",
        description: "Targeting a kneeling character with a ranged attack grants one penalty die, targeting a kneeling character with a melee attack grants one bonus die."
    },
    prone: {
        displayName: "Prone",
        description: "Targeting a prone character with a ranged attack grants two penalty dice, targeting a prone character with a melee attack grants two bonus dice."
    },
    cover: {
        displayName: "Cover",
        description: ""
    },
    concealment: {
        displayName: "Concealment",
        description: ""
    },
    flanked: {
        displayName: "Flanked",
        description: "A character is flanked if they have enemies on either side of them who are in range to make melee attacks agains the character. All melee attacks agains a flanked character gain a a bonus die."
    },
    flatFooted: {
        displayName: "Flat Footed",
        description: "A flat footed target is in no way prepared for combat, in addition to being surprised all attacks against a flat footed character gain one bonus die."
    },
    surprised: {
        displayName: "Surprised",
        description: "A surprised target does not benefit from melee, ranged, or magic defense bonuses and doesn't act on the round they are surprised."
    },
    wind: {
        displayName: "Wind",
        description: ""
    },
    reach: {
        displayName: "Reach",
        description: ""
    }
};

module.exports = primaryAttributesData;
