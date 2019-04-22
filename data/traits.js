let traitsData = {
    adventurer: {
        displayName: "Adventurer",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Character Type"],
        description: `The character:
        <ul>
        <li>chooses 5 skills to gain rank one (novice) in and for each of them one secondary skill associated with that skill to gain rank one in.</li>
        <li>chooses one of their skills at rank one to increase to rank two (skilled).</li>
        <li>learn one spoken language as chosen by the GM.</li>
        <li>Gain 5 traits of the character's choice following the standard rules for gaining traits.</li>
        </ul>
        `
    },
    hardy: {
        displayName: "Hardy",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains advantage on rolls to resist illness and poisons."
    },
    healthy: {
        displayName: "Healthy",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "Each time a character takes this trait they increase their max wounds by one plus their body stat, minimum of two total max wounds. The increase to max wounds granted by this trait is recalculated if the character's body attribute changes."
    },
    largeSmallSize: {
        displayName: "Large/Small Size",
        type: "General",
        requirements: [],
        requirementsDescription: "string",
        keywords: ["Starting"],
        description: "Increase or decrease the character's size by one."
    },
    leftHanded: {
        displayName: "Left Handed",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Starting"],
        description: "Target's of your melee attacks performed only with your primary (left) hand do not benefit from the *balanced* or *parrying* traits on any weapon readied in their primary hand."
    },
    linguist: {
        displayName: "Linguist",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character learns one spoken or written language or two spoken languages for which they already know a related language."
    },
    tough: {
        displayName: "Tough",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Advanced"],
        description: "Each time a character takes this trait, increase their toughness by one."
    },
    trainingSpecializedNovice: {
        displayName: "Training, Specialized Novice",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains rank one in two different secondary skills."
    },
    trainingSpecializedSkilled: {
        displayName: "Training, Specialized Skilled",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character increases a secondary skill from rank one to rank two."
    },
    trainingSpecializedExpert: {
        displayName: "Training, Specialized Expert",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Advanced"],
        description: "The character increases a secondary skill from rank two to rank three."
    },
    trainingSpecializedMaster: {
        displayName: "Training, Specialized Master",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Heroic"],
        description: "The character increases a secondary skill from rank three to rank four."
    },
    trainingSpecializedLegendary: {
        displayName: "Training, Specialized Legendary",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "The character increases a secondary skill from rank four to rank five."
    },
    trainingNovice: {
        displayName: "Training, Novice",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains rank one in a new skill and one rank in one of that skills secondary skills."
    },
    trainingSkilled: {
        displayName: "Training, Skilled",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Advanced"],
        description: "The character increases a skill from rank one to rank two."
    },
    trainingExpert: {
        displayName: "Training, Expert",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "The character increases one skill from rank two to rank three."
    },
    trainingMaster: {
        displayName: "Training, Master",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "The character increases one skill from rank three to rank four."
    },
    heroicAttribute: {
        displayName: "Heroic Attribute",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "One of the character's primary attribute's is increased by one. This can not increase any trait to higher than 3 plus the strains racial adjustment to that attribute."
    },
    traitName: {
        displayName: "name",
        type: "",
        requirements: [],
        requirementsDescription: "string",
        keywords: [],
        description: "text"
    }
};

module.exports = traitsData;
