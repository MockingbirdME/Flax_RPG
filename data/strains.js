let strainsData = {
    denja: {
        displayName: "Denja",
        physicalAppearance: "",
        history: "",
        familySocialStructure: "",
        breeding: "",
        placeInSociety: "",
        namingConventions: "",
        size: -1,
        speed: 3,
        attributeModifiers: {
            description: "-1 to body and reflexes, + 1 mind.",
            body: -1,
            reflexes: -1,
            perception: 0,
            mind: 1
        },
        strainTraits: {
            airSacks: {
                displayName: "Air Sacks",
                description: "the character can hold their breath for ten minutes before needing to make breath holding or remain conscious checks provided they had the opportunity to fill their air sacks before submerging."
            },
            clawsWebbedFeetTail: {
                displayName: "Claws, Webbed Feet, and Tail",
                description: "the character gains advantage on swim and climb skill checks."
            },
            glidingMembrain: {
                displayName: "Gliding Membrain",
                description: "the character may glide when falling as an action provided they are not wearing clothing or armor that prevents the membrane running from wrist to ankle from opening and are not encumbered. This action costs one action point and one stamina point and allows the character to move 10 hexes plus up to their rank in the *fly secondary skill (personal movement)* while falling 5 hexes; if the character is still in the air after this action is completed and they have any additional action points left on their turn they must continue to take this action or they will fall the remaining distance. If a character finds themselves falling outside of their turn they may use their reaction to take this action. Gliding can not be done if the character can not move the required 10 hexes, such as if falling down a narrow shaft or well."
            },
            scales: {
                displayName: "Natural Armor, Scales",
                description: "the character has natural armor with *armor value* ???, *body value* 0 and *resistance (concussive and penetrating)* 1"
            },
            claws: {
                displayName: "Natural Weapon, clawed fingers and toes:",
                description: "the character's brawling attacks may inflict penetrating damage, doing so reduces the max bonus body damage of the attack to +1."
            }
        }
    },
    rhosk: {
        displayName: "Rhosk",
        physicalAppearance: "",
        history: "",
        familySocialStructure: "",
        breeding: "",
        placeInSociety: "",
        namingConventions: "",
        size: 1,
        speed: 4,
        attributeModifiers: {
            description: "+2 body.",
            body: 2,
            reflexes: 0,
            perception: 0,
            mind: 0
        },
        strainTraits: {
            coolTemperament: {
                displayName: "Cool Temperament",
                description: "the character gains advantage on all checks to resist fear."
            },
            greatStrength: {
                displayName: "Great Strength",
                description: "the character treats their size as one higher for the purpose of lifting and carrying capacity."
            },
            usedToTheCold: {
                displayName: "Used to the Cold",
                description: "the character gains three to their resistance (cold)."
            }
        }
    },
    sapeen: {
        displayName: "Sapeen",
        physicalAppearance: "",
        history: "",
        familySocialStructure: "",
        breeding: "",
        placeInSociety: "",
        namingConventions: "",
        size: 0,
        speed: 4,
        attributeModifiers: {
            description: "+1 to any attribute.",
            body: 0,
            reflexes: 0,
            perception: 0,
            mind: 0,
            any: 1
        },
        strainTraits: {
            highlyAdaptive: {
                displayName: "Highly Adaptive",
                description: "the character gains one additional trait during the _assign traits_ step of creation and can have one more _advanced_ trait than they could otherwise."
            }
        }
    },
    torleni: {
        displayName: "Tor'leni",
        physicalAppearance: "",
        history: "",
        familySocialStructure: "",
        breeding: "",
        placeInSociety: "",
        namingConventions: "",
        size: 0,
        speed: 0,
        attributeModifiers: {
            description: "",
            body: 0,
            reflexes: 0,
            perception: 0,
            mind: 0
        },
        strainTraits: {
            trait: {
                displayName: "",
                description: ""
            }
        }
    }
};

module.exports = strainsData;
