let traitsData = {
    adventurer: {
        displayName: "Adventurer",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Character Type"],
        description: `The character:
        <ul>
        <li>Start with 10 stamina and 4 max wounds</li>
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
        keywords: ["advanced"],
        description: "The character gains advantage on rolls to resist illness and poisons."
    },
    healthy: {
        displayName: "Healthy",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["advanced"],
        description: "Each time a character takes this trait they increase their max stamina by two."
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
        description: "Each time a character takes this trait, increase their general damage resistances by one."
    },
    trainingSpecializedNovice: {
        displayName: "Training, Specialized Novice",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains rank one in a secondary skill."
    },
    trainingSpecializedSkilled: {
        displayName: "Training, Specialized Skilled",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Advanced"],
        description: "The character increases a secondary skill from rank one to rank two."
    },
    trainingSpecializedExpert: {
        displayName: "Training, Specialized Expert",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Heroic"],
        description: "The character increases a secondary skill from rank two to rank three."
    },
    trainingSpecializedMaster: {
        displayName: "Training, Specialized Master",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "The character increases a secondary skill from rank three to rank four."
    },
    trainingNovice: {
        displayName: "Training, Novice",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Advanced"],
        description: "The character gains rank one in a new skill."
    },
    trainingSkilled: {
        displayName: "Training, Skilled",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Heroic"],
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
    heroicAttribute: {
        displayName: "Heroic Attribute",
        type: "General",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "One of the character's primary attribute's is increased by one. This can not increase any trait to higher than 3 plus the strains racial adjustment to that attribute."
    },
    arcaneFont: {
        displayName: "Arcane Font",
        type: "Mage",
        requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
        requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
        keywords: ["advanced"],
        description: "Before making a skill check for casting a spell, gathering arcane energy, or crafting arcane energy the caster may choose to add their body, along with their mind, to the skill check; if they do so they lose stamina equal to twice their body stat, if positive, before making the affected skill check."
    },
    cantripCasterPowerful: {
        displayName: "Cantrip Caster, Powerful",
        type: "Mage",
        requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
        requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
        keywords: ["Heroic"],
        description: "This trait may be taken any number of times, increase the max arcane cost of the character's cantrips by the number of instances of this trait they have."
    },
    cantripCasterSpeedy: {
        displayName: "Cantrip Caster, Speedy",
        type: "Mage",
        requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
        requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
        keywords: ["Advanced"],
        description: "The first cantrip the character casts each turn does not count against the limit of one magic action per turn."
    },
    dependentMage: {
        displayName: "Dependent Mage",
        type: "Mage",
        requirements: ["No other mage traits"],
        requirementsDescription: "No other mage traits",
        keywords: ["Advanced"],
        description: `The character is a dependent mage gaining the following benefits:
          <ul>
          <li>They can know up to one cantrip and up to two spells.</li>
          <li>They gains access to a number of arcane power secondary skills equal to one plus their rank in the magical aptitude secondary skill, if the character later increases their rank in the magical aptitude primary skill they may recalculate the number of arcane power secondary skills they have access to; these secondary skills can not have a rank of more than one greater than their rank in the magical aptitude primary skill.</li>
          <li>They suffers one level of disadvantage to all skill checks to cast spells, gather, or shape arcane energy if they have no arcane essence in their system.</li>
          <li>They cannot make skill checks to cast spells, gather, or shape arcane energy if they have not consumed arcane essence in the last 24 hours.</li>
          <li>They cannot cast cantrips if they have not consumed arcane essence in the last span of days.</li>
          <li>They can burn the arcane essence in their system to reduce one instance of arcane dues they suffer by half.</li></ul>`
    },
    expandedSpellList: {
        displayName: "Expanded Spell List",
        type: "Mage",
        requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
        requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
        keywords: [],
        description: "This trait may be taken any number of times, each time it is taken the character increases the number of spells or cantrips they know by one."
    },
    learnedMage: {
        displayName: "Learned Mage",
        type: "Mage",
        requirements: ["No other mage traits"],
        requirementsDescription: "No other mage traits",
        keywords: ["Advanced"],
        description: `The character is a learned mage gaining the following benefits:
            <ul>
          <li>They can know up to one cantrip and up to two spells.</li>
          <li>They gains access to two arcane theme secondary skills, those skills cannot be above rank two and cannot be increased beyond rank two.</li>
          <li>They gain access to learned mage specific arcane effects.</li></ul>`
    },
    learnedMageAdvancedLearning: {
        displayName: "Learned Mage, Advanced Learning",
        type: "Mage",
        requirements: ["Learned Mage"],
        requirementsDescription: "Learned Mage",
        keywords: [],
        description: "The character chooses one arcane theme secondary skill they have access to, that skill can be increased by one rank (Note: this trait does not increase the rank of the selected skill, it only allows other traits/effects to increase it)."
    },
    learnedMageExpandedLearning: {
        displayName: "Learned Mage, Expanded Learning",
        type: "Mage",
        requirements: ["Learned Mage"],
        requirementsDescription: "Learned Mage",
        keywords: ["Advanced"],
        description: "The character gains access to one arcane theme secondary skill that skill cannot be above rank one and cannot be increased beyond rank one."
    },
    naturalMage: {
        displayName: "Natural Mage",
        type: "Mage",
        requirements: ["No other mage traits"],
        requirementsDescription: "No other mage traits",
        keywords: ["Advanced"],
        description: `The character is a natural mage gaining the following benefits:
        <ul>
          <li>They can know up to one cantrip and up to two spells.</li>
          <li>They gains access to one arcane theme secondary skill, this skill is treated as being two ranks higher than it actually is when determining the result of arcane effects.</li></ul>`
    },
    naturalMageExpandedPowers: {
        displayName: "Natural Mage, Expanded Powers",
        type: "Mage",
        requirements: ["Natural Mage"],
        requirementsDescription: "Natural Mage",
        keywords: [],
        description: "The character chooses one arcane power secondary skill to gain access to, that skill cannot be above rank one and cannot have its rank increased beyond one."
    },
    sneakySpellCaster: {
        displayName: "Sneaky Spell Caster",
        type: "Mage",
        requirements: ["Dependent Mage, Learned Mage, or Natural Mage."],
        requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
        keywords: ["Advanced"],
        description: "This trait may be taken any number of times. Reduce the cost of component effects the caster adds to spells and cantrips by one per instance of this trait they have; this can not reduce an effect's arcane cost below zero."
    },
    ambusherBackstab: {
        displayName: "Ambusher, Backstab",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains an ambush damage bonus that they can apply to eligible attacks, the damage bonus is equal to 3; once a character has applied their ambush bonus damage to a target they cannot apply it to that target again until their next turn. Additionally, the character may apply their ambush bonus when making a melee attack against a flat-footed foe."
    },
    ambusherSneakAttack: {
        displayName: "Ambusher, Sneak Attack",
        type: "Combat",
        requirements: ["Ambusher, Backstab"],
        requirementsDescription: "Backstab Ambusher",
        keywords: ["Advanced"],
        description: "The character may apply their ambush bonus when making a melee attack against a flat footed or surprised foe."
    },
    ambusherStealthy: {
        displayName: "Ambusher, Stealthy",
        type: "Combat",
        requirements: ["Sneak Attack Ambusher"],
        requirementsDescription: "Sneak Attack Ambusher",
        keywords: ["Advanced"],
        description: "The character may apply their ambush bonus when making a melee attack against a foe who is unaware of the character's presence, or unaware that they are a threat."
    },
    ambusherFlanking: {
        displayName: "Ambusher, Flanking",
        type: "Combat",
        requirements: ["Ambusher, Stealthy"],
        requirementsDescription: "Stealthy Ambusher",
        keywords: ["Heroic"],
        description: "The character may apply their ambush bonus when making a melee attack against a foe the character is flanking."
    },
    amusherRanged: {
        displayName: "Ambusher, Ranged",
        type: "Combat",
        requirements: ["Ambusher, Backstab"],
        requirementsDescription: "Backstab Ambusher",
        keywords: ["Advanced"],
        description: "The character may apply their ambush bonus when making a ranged attack at close range provided they meet their other requirements to apply this bonus."
    },
    ambusherSniper: {
        displayName: "Ambusher, Sniper",
        type: "Combat",
        requirements: ["Ambusher, Ranged"],
        requirementsDescription: "Ranged Ambusher",
        keywords: ["Heroic"],
        description: "The character may apply their ambush bonus when making a ranged attack at any range provided they meet their other requirements to apply this bonus."
    },
    ambusherAssassin: {
        displayName: "Ambusher, Assassin",
        type: "Combat",
        requirements: ["Ambusher, Sneak Attack"],
        requirementsDescription: "Sneak Attack Ambusher",
        keywords: ["Heroic"],
        description: "Increase the character's ambush damage bonus by 5, this trait may be taken multiple times."
    },
    combatReflexes: {
        displayName: "Combat Reflexes",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains a second reaction each turn, this reaction can only be used to make a free attack."
    },
    combatReflexesAdvanced: {
        displayName: "Combat Reflexes, Advanced",
        type: "Combat",
        requirements: ["Combat Reflexes"],
        requirementsDescription: "Combat Reflexes",
        keywords: ["Advanced"],
        description: "The additional reaction gained from *combat reflexes* can now be used for any reaction."
    },
    combatReflexesHeroic: {
        displayName: "Combat Reflexes, Heroic",
        type: "Combat",
        requirements: ["Combat Reflexes, Advanced"],
        requirementsDescription: "Advanced Combat Reflexes",
        keywords: ["Heroic"],
        description: "Gain a third reaction each turn."
    },
    dangerSense: {
        displayName: "Danger Sense",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character is never *flat footed* when conscious and unrestrained."
    },
    dangerSenseAdvanced: {
        displayName: "Danger Sense, Advanced",
        type: "Combat",
        requirements: ["Danger Sense"],
        requirementsDescription: "Danger Sense",
        keywords: ["Advanced"],
        description: "The character still benefits from their melee, ranged, and magic defense bonuses when *surprised*, conscious, and unrestrained."
    },
    dangerSenseHeroic: {
        displayName: "Danger Sense",
        type: "Combat",
        requirements: ["Danger Sense, Advanced"],
        requirementsDescription: "Advanced Danger Sense",
        keywords: ["Heroic"],
        description: "The character may act on rounds when they are surprised, if their initiative would be before all non-surprised enemies they act after the enemy with the highest initiative."
    },
    dualWeilder: {
        displayName: "Dual Weilder",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character can wield one handed weapons in their off hand and make off handed attacks with them."
    },
    duelist: {
        displayName: "Duelist",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character may spend one action point on their turn to choose one character within this trait's range of 10 hexes to be their dueling opponent. The character may spend their reaction to add one level of disadvantage to an attack's skill check against them made by their dueling opponent provided the attack was made from within range and no other character is within melee range of them. A character ceases to be a dueling opponent if another character is made a dueling opponent or if they leave the character's sight for a full round."
    },
    duelistDefensive: {
        displayName: "Duelist, Defensive",
        type: "Combat",
        requirements: ["Duelist"],
        requirementsDescription: "Duelist",
        keywords: ["Advanced"],
        description: "When the character spends their reaction to add a level of disadvantage to their dueling opponent they now add one level of disadvantage to all eligible attacks from their opponent until the character's next turn."
    },
    duelistDistance: {
        displayName: "Duelist, Distance",
        type: "Combat",
        requirements: ["Duelist"],
        requirementsDescription: "Duelist",
        keywords: ["Advanced"],
        description: "The range for Duelist's effects is increased to 30 hexes."
    },
    duelistMelee: {
        displayName: "Duelist, Melee",
        type: "Combat",
        requirements: ["Duelist"],
        requirementsDescription: "Duelist",
        keywords: ["Advanced"],
        description: "The character no longer requires that no other character is within melee range of them to use their reaction to gain benefits from duelist traits."
    },
    duelistHeroic: {
        displayName: "Duelist, Heroic",
        type: "Combat",
        requirements: ["Two Dualist Traits"],
        requirementsDescription: "Two Dualist Traits",
        keywords: ["Heroic"],
        description: "When the character spends their reaction to grant disadvantage to one or more attacks by their dueling opponent they gain one level of advantage on their next eligible attack against their dueling opponent before the end of their next turn."
    },
    fastReflexes: {
        displayName: "Fast Reflexes",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "For each time a character has this trait they gain a +1 bonus to their initiative."
    },
    fueledByPain: {
        displayName: "Fueled by Pain",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Advanced"],
        description: "If a character suffers one or more wounds after fully resolving the damage they regain all missing stamina."
    },
    hardToKill: {
        displayName: "Hard to Kill",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: ["Heroic"],
        description: "Once per scene the character may spend their reaction to suffer no damage from one attack. The controlling player may decide to use this ability after they know the damage the character would take."
    },
    mobileCombatant: {
        displayName: "Mobile Combatant",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The character gains a mobile combat defense bonus against free attacks provided they have not taken the disengage action this turn, this bonus is equal to their melee defense bonus."
    },
    mobileCombatantAdvanced: {
        displayName: "Mobile Combatant, Advanced",
        type: "Combat",
        requirements: ["Mobile Combatant"],
        requirementsDescription: "Mobile Combatant",
        keywords: ["Advanced"],
        description: "The character gains their mobile combatant defense bonus to free attacks even if they've taken the disengage action this turn."
    },
    mobileCombatantHeroic: {
        displayName: "Mobile Combatant, Heroic",
        type: "Combat",
        requirements: ["Mobile Combatant, Advanced"],
        requirementsDescription: "Advanced Mobile Combatant",
        keywords: ["Heroic"],
        description: "The character no longer provokes free attacks."
    },
    multiAttack: {
        displayName: "Multi-Attack",
        type: "Combat",
        requirements: ["custom"],
        requirementsDescription: "",
        keywords: ["Epic"],
        description: "The first time the character would receive disadvantage to an attack skill check as a result of their multi-attack penalty reduce that penalty by one."
    },
    quickDraw: {
        displayName: "Quick Draw",
        type: "Combat",
        requirements: [],
        requirementsDescription: "",
        keywords: [],
        description: "The first *ready/stow item* action the character takes each turn has an action point cost of 0."
    },
    quickDrawAdvanced: {
        displayName: "Quick Draw, Advanced",
        type: "Combat",
        requirements: ["Quick Draw"],
        requirementsDescription: "Quick Draw",
        keywords: ["Advanced"],
        description: "The first two *ready/stow item* actions the character takes each turn has an action point cost of 0."
    },
    quickDrawHeroic: {
        displayName: "Quick Draw",
        type: "Combat",
        requirements: ["Quick Draw, Advanced"],
        requirementsDescription: "Advanced Quick Draw",
        keywords: ["Heroic"],
        description: "The character may ready or stow the weapon used in any weapon attack they make."
    },
    recklessAttacker: {
            displayName: "Reckless Attacker",
            type: "Combat",
            requirements: [],
            requirementsDescription: "",
            keywords: [],
            description: "The character may choose to spend one stamina before making a basic or brawling attack on their turn, if they do they gain a level of advantage to the melee attack skill check on this attack. If a character uses this ability one or more times on their turn all melee attacks made against them until the begining of their next turn gain a level of advantage on their skill checks."
    },
    recklessAttackerAdvanced: {
            displayName: "Reckless Attacker, Advanced",
            type: "Combat",
            requirements: ["Reckless Attacker"],
            requirementsDescription: "Reckless Attacker",
            keywords: ["Advanced"],
            description: "The character may choose to trigger their reckless attack trait on bash, bull rush, or power attacks."
    }
};

module.exports = traitsData;
