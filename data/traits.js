/* eslint-disable complexity */
const utils = require('../lib/trait_utils');

const traitsData = {
  adventurer: {
    displayName: "Adventurer",
    type: "Character Type",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Starting"],
    description: `The character:
        <ul>
        <li>Start with 10 stamina and 3 max wounds, and gain 3 actions points and 1 reaction point per round in combat</li>
        <li>chooses 3 skills to gain rank one (novice) in and for each of them two secondary skills associated with that skill to gain rank one in.</li>
        <li>chooses one of their skills at rank one to increase to rank two (skilled) and one of it's secondary skills to increase by one rank.</li>
        <li>learn one spoken language as chosen by the GM.</li>
        <li>Gain 5 traits of the character's choice following the standard rules for gaining traits.</li>
        </ul>
        `,
    options: (character, selectedOptions = {}) => {
      const options = [];
      
      const {skills} = character;
      const baseSkills = utils.getSkillList(skills, {hasSecondaryAtRank: 0, neededSecondaryMatches: 2, requiredRank: 0, include: [selectedOptions.baseSkillOne, selectedOptions.baseSkillTwo]});
      const expertSkills = utils.getSkillList(skills, {hasSecondaryUnderRank: 2, requiredRank: 1, include: [selectedOptions.expertSkill]});

      options.push({id: "baseSkillOne", displayName: "Skill", type: "skill", options: baseSkills.filter(skill => skill !== selectedOptions.baseSkillTwo)});
      
      if (selectedOptions.baseSkillOne) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.baseSkillOne].secondarySkills, {requiredRank: 0, include: [selectedOptions.baseSkillOneSecondarySkillOne, selectedOptions.baseSkillOneSecondarySkillTwo]});
        
        options.push({id: "baseSkillOneSecondarySkillOne", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions.filter(option => option !== selectedOptions.baseSkillOneSecondarySkillTwo), parentId: "baseSkillOne", parentValue: selectedOptions.baseSkillOne});
        
        options.push({id: "baseSkillOneSecondarySkillTwo", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions.filter(option => option !== selectedOptions.baseSkillOneSecondarySkillOne), parentId: "baseSkillOne", parentValue: selectedOptions.baseSkillOne});
      }
      
      options.push({id: "baseSkillTwo", displayName: "Skill", type: "skill", options: baseSkills.filter(skill => skill !== selectedOptions.baseSkillOne)});
      
      if (selectedOptions.baseSkillTwo) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.baseSkillTwo].secondarySkills, {requiredRank: 0, include: [selectedOptions.baseSkillTwoSecondarySkillOne, selectedOptions.baseSkillTwoSecondarySkillTwo]});

        options.push({id: "baseSkillTwoSecondarySkillOne", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions.filter(option => option !== selectedOptions.baseSkillOneSecondarySkillTwo), parentId: "baseSkillTwo", parentValue: selectedOptions.baseSkillTwo});
        
        options.push({id: "baseSkillTwoSecondarySkillTwo", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions.filter(option => option !== selectedOptions.baseSkillOneSecondarySkillOne), parentId: "baseSkillTwo", parentValue: selectedOptions.baseSkillTwo});
      }
      
      options.push({id: "expertSkill", displayName: "Expert Skill", type: "skill", options: expertSkills});
      
      if (selectedOptions.expertSkill) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.expertSkill].secondarySkills, {maxRank: 1, include: [selectedOptions.expertSecondarySkill]});
        
        options.push({id: "expertSecondarySkill", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions, parentId: "expertSkill", parentValue: selectedOptions.expertSkill});
      }
      
      return options; 
    },
    isCharacterEligible: character => {
      if (character.traits.find(trait => trait.type === "Character Type")) return false;
      return true;
    },
    apply: (character, selectedOptions) => {
      // Add 10 max stamina.
      character.updateVariable("staminaMaxAdjustment", 10);
       
      // Add 3 max wounds.
      character.updateVariable("woundsMaxAdjustment", 3); 
      
      // Add 3 action points.
      character.updateVariable("actionPointsAdjustment", 3);
      
      // Add 1 reaction points.
      character.updateVariable("reactionPointsAdjustment", 1); 
      
      // Add 5 entitled traits.
      character.updateVariable("extraEntitledTraits", 5); 
      
      if (!selectedOptions) return;
      
      const {baseSkillOne,
        baseSkillTwo,
        expertSkill,
        baseSkillOneSecondarySkillOne,
        baseSkillOneSecondarySkillTwo,
        baseSkillTwoSecondarySkillOne,
        baseSkillTwoSecondarySkillTwo,
        expertSecondarySkill} = selectedOptions;
        
      // TODO validate that all selected options are valid.
        
      if (baseSkillOne) {
        character.setSkill(baseSkillOne, 1);
        if (baseSkillOneSecondarySkillOne) character.setSecondarySkill(baseSkillOne, baseSkillOneSecondarySkillOne, 1);
        
        if (baseSkillOneSecondarySkillTwo) character.setSecondarySkill(baseSkillOne, baseSkillOneSecondarySkillTwo, 1);
      }
      if (baseSkillTwo) {
        character.setSkill(baseSkillTwo, 1);
        if (baseSkillTwoSecondarySkillOne) character.setSecondarySkill(baseSkillTwo, baseSkillTwoSecondarySkillOne, 1);
        
        if (baseSkillTwoSecondarySkillTwo) character.setSecondarySkill(baseSkillTwo, baseSkillTwoSecondarySkillTwo, 1);
      }
      if (expertSkill) {
        character.setSkill(expertSkill, 2);
        if (expertSecondarySkill) {
          const currentExpertSecondarySkillRank = character.skills[expertSkill].secondarySkills[expertSecondarySkill].rank || 0;
          character.setSecondarySkill(expertSkill, expertSecondarySkill, currentExpertSecondarySkillRank + 1);
        }
      }
      // TODO gain a language
    }
  },
  hardy: {
    displayName: "Hardy",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character gains a bonus die on rolls to resist, or recover from, illness and poisons.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'hardy'),
    apply: character => character.addTraitAsNote({traitName: 'hardy'})
  },
  hardToKillHealthy: {
    displayName: "Hard to Kill, Healthy",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "Each time a character takes this trait they increase their max stamina by one.",
    isCharacterEligible: character => true,
    apply: (character, options) => {
      character.updateVariable("staminaMaxAdjustment", 1); 
    }
  },
  hardToKillTough: {
    displayName: "Hard to Kill, Tough",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "Each time a character takes this trait they increase their max wounds by one.",
    isCharacterEligible: character => true,
    apply: (character, options) => {
      character.updateVariable("woundsMaxAdjustment", 1); 
    }
  },
  hardToKillPlotArmor: {
    displayName: "Hard to Kill, Plot Armor",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Epic"],
    description:
      "Once per scene per instance of this trait the character has they may spend their reaction to suffer no damage from one attack. The controlling player may decide to use this ability after they know the damage the character would take.",
    isCharacterEligible: character => true,
    apply: character => character.addTraitAsNote({traitName: 'hardToKillPlotArmor'})
  },
  linguist: {
    displayName: "Linguist",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character learns one spoken or written language or two spoken languages for which they already know a related language."
  },
  trainingSpecializedNovice: {
    displayName: "Training, Specialized Novice",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description: "The character gains rank one in a secondary skill.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(character.skills, {include: [selectedOptions.baseSkill], hasSecondaryAtRank: 0});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      if (selectedOptions.baseSkill) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.baseSkill].secondarySkills, {requiredRank: 0, include: [selectedOptions.secondarySkill]});

        options.push({id: "secondarySkill", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions, parentId: "baseSkill", parentValue: selectedOptions.baseSkill});
      }
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {hasSecondaryAtRank: 0}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill, secondarySkill} = options;
      if (!baseSkill || !secondarySkill) return;
      // TODO validate that secondary skill is currently rank 0.
      character.setSecondarySkill(baseSkill, secondarySkill, 1);
    }
  },
  trainingSpecializedSkilled: {
    displayName: "Training, Specialized Skilled",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character increases a secondary skill from rank one to rank two.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(skills, {include: [selectedOptions.baseSkill], hasSecondaryAtRank: 1});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      if (selectedOptions.baseSkill) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.baseSkill].secondarySkills, {requiredRank: 1, include: [selectedOptions.secondarySkill]});

        options.push({id: "secondarySkill", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions, parentId: "baseSkill", parentValue: selectedOptions.baseSkill});
      }
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {hasSecondaryAtRank: 1}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill, secondarySkill} = options;
      if (!baseSkill || !secondarySkill) return;
      // TODO validate that secondary skill is currently rank 1.
      character.setSecondarySkill(baseSkill, secondarySkill, 2);
    }
  },
  trainingSpecializedExpert: {
    displayName: "Training, Specialized Expert",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "The character increases a secondary skill from rank two to rank three.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(skills, {include: [selectedOptions.baseSkill], hasSecondaryAtRank: 2});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      if (selectedOptions.baseSkill) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.baseSkill].secondarySkills, {requiredRank: 2, include: [selectedOptions.secondarySkill]});

        options.push({id: "secondarySkill", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions, parentId: "baseSkill", parentValue: selectedOptions.baseSkill});
      }
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {hasSecondaryAtRank: 2}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill, secondarySkill} = options;
      if (!baseSkill || !secondarySkill) return;
      // TODO validate that secondary skill is currently rank 2.
      character.setSecondarySkill(baseSkill, secondarySkill, 3);
    }
  },
  trainingSpecializedMaster: {
    displayName: "Training, Specialized Master",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Epic"],
    description:
      "The character increases a secondary skill from rank three to rank four.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(skills, {include: [selectedOptions.baseSkill], hasSecondaryAtRank: 3});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      if (selectedOptions.baseSkill) {
        const secondaryOptions = utils.getSkillList(skills[selectedOptions.baseSkill].secondarySkills, {requiredRank: 3, include: [selectedOptions.secondarySkill]});

        options.push({id: "secondarySkill", displayName: "Secondary Skill", type: "secondary skill", options: secondaryOptions, parentId: "baseSkill", parentValue: selectedOptions.baseSkill});
      }
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {hasSecondaryAtRank: 3}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill, secondarySkill} = options;
      if (!baseSkill || !secondarySkill) return;
      // TODO validate that secondary skill is currently rank 2.
      character.setSecondarySkill(baseSkill, secondarySkill, 4);
    }
  },
  trainingNovice: {
    displayName: "Training, Novice",
    type: "General",
    requirements: [
      "At least 1 rank in an associated secondary skill."
    ],
    requirementsDescription:
      "At least 1 rank in an associated secondary skill.",
    keywords: ["Simple"],
    description: "The character gains rank one in a new skill.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(skills, {include: [selectedOptions.baseSkill], requiredRank: 0, minimumSecondaryRanks: 1});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {requiredRank: 0, minimumSecondaryRanks: 1}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill} = options;
      if (!baseSkill) return;
      // TODO validate that skill is currently rank 0.
      character.setSkill(baseSkill, 1);
    }
  },
  trainingSkilled: {
    displayName: "Training, Skilled",
    type: "General",
    requirements: [
      "At least three total ranks in associated secondary skills."
    ],
    requirementsDescription:
      "At least three total ranks in associated secondary skills.",
    keywords: ["Heroic"],
    description: "The character increases a skill from rank one to rank two.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(skills, {include: [selectedOptions.baseSkill], requiredRank: 1, minimumSecondaryRanks: 3});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {requiredRank: 1, minimumSecondaryRanks: 3}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill} = options;
      if (!baseSkill) return;
      // TODO validate that skill is currently rank 1.
      character.setSkill(baseSkill, 2);
    }
  },
  trainingExpert: {
    displayName: "Training, Expert",
    type: "General",
    requirements: ["At least five total ranks in associated secondary skills."],
    requirementsDescription:
      "At least five total ranks in associated secondary skills.",
    keywords: ["Epic"],
    description: "The character increases a skill from rank two to rank three.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {skills} = character;
      
      const baseSkills = utils.getSkillList(skills, {include: [selectedOptions.baseSkill], requiredRank: 2, minimumSecondaryRanks: 5});
            
      options.push({id: "baseSkill", displayName: "Skill", type: "skill", options: baseSkills});
      
      return options; 
    },
    isCharacterEligible: character => utils.getSkillList(character.skills, {requiredRank: 2, minimumSecondaryRanks: 5}).length > 0,
    apply: (character, options = {}) => {
      const {baseSkill} = options;
      if (!baseSkill) return;
      // TODO validate that skill is currently rank 1.
      character.setSkill(baseSkill, 3);
    }
  },
  heroicAttribute: {
    displayName: "Heroic Attribute",
    type: "General",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Epic"],
    description:
      "One of the character's primary attribute's is increased by one. This can not increase any trait to higher than 3 plus the strains racial adjustment to that attribute.",
    options: (character, selectedOptions = {}) => {
      const options = [];
      const {primaryAttributes} = character;

      const eligibleAttributes = Object.keys(primaryAttributes).filter(attributeName => primaryAttributes[attributeName] < 3 || attributeName === selectedOptions.primaryAttribute);
            
      options.push({id: "primaryAttribute", displayName: "Attribute", type: "attribute", options: eligibleAttributes});

      return options; 
    },
    isCharacterEligible: character => Object.keys(character.primaryAttributes).filter(attributeName => character.primaryAttributes[attributeName] < 3).length > 0,
    apply: (character, options = {}) => {
      const {primaryAttribute} = options;

      if (!primaryAttribute) return;
      // TODO validate that options are valid choices.
      character.modifyAttribute(primaryAttribute, +1);
    }
  },
  arcaneFont: {
    displayName: "Arcane Font",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "Before making a skill check for casting a spell, gathering arcane energy, or crafting arcane energy the caster may choose to add their body, along with their mind, to the skill check; if they do so they lose stamina equal to twice their body stat, if positive, before making the affected skill check."
  },
  cantripCasterPowerful: {
    displayName: "Cantrip Caster, Powerful",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "This trait may be taken any number of times, increase the max arcane cost of the character's cantrips by the number of instances of this trait they have."
  },
  cantripCasterSpeedy: {
    displayName: "Cantrip Caster, Speedy",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "The first cantrip the character casts each turn does not count against the limit of one magic action per turn."
  },
  dependentMage: {
    displayName: "Dependent Mage",
    type: "Mage",
    requirements: ["No other mage traits"],
    requirementsDescription: "No other mage traits",
    keywords: ["Heroic"],
    description: `The character is a dependent mage gaining the following benefits:
          <ul>
          <li>They can know up to one cantrip and up to two spells.</li>
          <li>They gains access to a number of arcane power secondary skills equal to one plus their rank in the magical aptitude secondary skill, if the character later increases their rank in the magical aptitude primary skill they may recalculate the number of arcane power secondary skills they have access to; these secondary skills can not have a rank of more than one greater than their rank in the magical aptitude primary skill.</li>
          <li>They suffers one penalty die to all skill checks to cast spells, gather, or shape arcane energy if they have no arcane essence in their system.</li>
          <li>They cannot make skill checks to cast spells, gather, or shape arcane energy if they have not consumed arcane essence in the last 24 hours.</li>
          <li>They cannot cast cantrips if they have not consumed arcane essence in the last span of days.</li>
          <li>They can burn the arcane essence in their system to reduce one instance of arcane dues they suffer by half.</li></ul>`
  },
  expandedSpellList: {
    displayName: "Expanded Spell List",
    type: "Mage",
    requirements: ["Dependent Mage", "Learned Mage", "Natural Mage"],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Simple"],
    description:
      "This trait may be taken any number of times, each time it is taken the character increases the number of spells or cantrips they know by one."
  },
  learnedMage: {
    displayName: "Learned Mage",
    type: "Mage",
    requirements: [
      "No other mage traits, at least rank one in both the discipline and magical aptitude skills."
    ],
    requirementsDescription:
      "No other mage traits, at least rank one in both the discipline and magical aptitude skills.",
    keywords: ["Simple"],
    description: `The character is a learned mage gaining the following benefits:
            <ul>
          <li>They can know up to one cantrip and up to two spells.</li>
          <li>They gains access to two arcane theme secondary skills, those skills cannot be above rank one and cannot be increased beyond rank one.</li>
          <li>They gain access to learned mage specific arcane effects.</li></ul>`
  },
  learnedMageAdvancedLearning: {
    displayName: "Learned Mage, Advanced Learning",
    type: "Mage",
    requirements: ["Learned Mage"],
    requirementsDescription: "Learned Mage",
    keywords: ["Simple"],
    description:
      "The character chooses one arcane theme secondary skill they have access to, that skill can be increased by one rank (Note: this trait does not increase the rank of the selected skill, it only allows other traits/effects to increase it)."
  },
  learnedMageExpandedLearning: {
    displayName: "Learned Mage, Expanded Learning",
    type: "Mage",
    requirements: ["Learned Mage"],
    requirementsDescription: "Learned Mage",
    keywords: ["Heroic"],
    description:
      "The character gains access to one arcane theme secondary skill that skill cannot be above rank zero and cannot be increased beyond rank zero."
  },
  naturalMage: {
    displayName: "Natural Mage",
    type: "Mage",
    requirements: ["No other mage traits"],
    requirementsDescription: "No other mage traits",
    keywords: ["Heroic"],
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
    keywords: ["Simple"],
    description:
      "The character chooses one arcane power secondary skill to gain access to, that skill cannot be above rank one and cannot have its rank increased beyond one."
  },
  sneakySpellCaster: {
    displayName: "Sneaky Spell Caster",
    type: "Mage",
    requirements: ["Dependent Mage, Learned Mage, or Natural Mage."],
    requirementsDescription: "Dependent Mage, Learned Mage, or Natural Mage.",
    keywords: ["Heroic"],
    description:
      "This trait may be taken any number of times. Reduce the cost of component effects the caster adds to spells and cantrips by one per instance of this trait they have; this can not reduce an effect's arcane cost below zero."
  },
  ambusherBackstab: {
    displayName: "Ambusher, Backstab",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "The character gains an ambush damage bonus that they can apply to eligible attacks, the damage bonus is equal to 3; once a character has applied their ambush bonus damage to a target they cannot apply it to that target again until their next turn. Additionally, the character may apply their ambush bonus when making a melee attack against a flat-footed foe.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'ambusherBackstab'),
    apply: character => {
      character.updateVariable("ambush", 3, {key: "damage"});
      character.updateVariable("ambush", "melee", {key: "attackType", type: "array"});
      character.updateVariable("ambush", "flat-footed", {key: "targetRequirement", type: "array"});
      character.addNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  ambusherSneakAttack: {
    displayName: "Ambusher, Sneak Attack",
    type: "Combat",
    requirements: ["Ambusher, Backstab"],
    requirementsDescription: "Backstab Ambusher",
    keywords: ["Simple"],
    description:
      "The character may apply their ambush bonus when making a melee attack against a flat footed or surprised foe.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'ambusherBackstab') && !character.traits.some(trait => trait.id === 'ambusherSneakAttack'),
    apply: character => {
      character.updateVariable("ambush", "surprised", {key: "targetRequirement", type: "array"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  ambusherStealthy: {
    displayName: "Ambusher, Stealthy",
    type: "Combat",
    requirements: ["Sneak Attack Ambusher"],
    requirementsDescription: "Sneak Attack Ambusher",
    keywords: ["Simple"],
    description:
      "The character may apply their ambush bonus when making a melee attack against a foe who is unaware of the character's presence, or unaware that they are a threat.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'ambusherSneakAttack') && !character.traits.some(trait => trait.id === 'ambusherStealthy'),
    apply: character => {
      character.updateVariable("ambush", "unaware you pose a threat", {key: "targetRequirement", type: "array"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  ambusherFlanking: {
    displayName: "Ambusher, Flanking",
    type: "Combat",
    requirements: ["Ambusher, Stealthy"],
    requirementsDescription: "Stealthy Ambusher",
    keywords: ["Heroic"],
    description:
      "The character may apply their ambush bonus when making a melee attack against a foe the character is flanking.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'ambusherStealthy') && !character.traits.some(trait => trait.id === 'ambusherFlanking'),
    apply: character => {
      character.updateVariable("ambush", "are being flanked by the character", {key: "targetRequirement", type: "array"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  amusherRanged: {
    displayName: "Ambusher, Ranged",
    type: "Combat",
    requirements: ["Ambusher, Backstab"],
    requirementsDescription: "Backstab Ambusher",
    keywords: ["Simple"],
    description:
      "The character may apply their ambush bonus when making a ranged attack at close range provided they meet their other requirements to apply this bonus.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'ambusherBackstab') && !character.traits.some(trait => trait.id === 'amusherRanged'),
    apply: character => {
      character.updateVariable("ambush", "ranged (at close range)", {key: "attackType", type: "array"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  ambusherSniper: {
    displayName: "Ambusher, Sniper",
    type: "Combat",
    requirements: ["Ambusher, Ranged"],
    requirementsDescription: "Ranged Ambusher",
    keywords: ["Heroic"],
    description:
      "The character may apply their ambush bonus when making a ranged attack at any range provided they meet their other requirements to apply this bonus.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'amusherRanged') && !character.traits.some(trait => trait.id === 'ambusherSniper'),
    apply: character => {
      character.updateVariable("ambush", "ranged (at any range)", {key: "attackType", type: "array"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  ambusherSkilled: {
    displayName: "Ambusher, Skilled",
    type: "Combat",
    requirements: ["Ambusher, Backstab"],
    requirementsDescription: "Backstab Ambusher",
    keywords: ["Simple"],
    description:
      "Increase the character's ambush damage bonus by 1, this trait may be taken multiple times.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'ambusherBackstab'),
    apply: character => {
      character.updateVariable("ambush", 1, {key: "damage"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  ambusherAssassin: {
    displayName: "Ambusher, Assassin",
    type: "Combat",
    requirements: ["Ambusher, Sneak Attack"],
    requirementsDescription: "Sneak Attack Ambusher",
    keywords: ["Heroic"],
    description:
      "Increase the character's ambush damage bonus by 3, this trait may be taken multiple times.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'ambusherSneakAttack'),
    apply: character => {
      character.updateVariable("ambush", 3, {key: "damage"});
      character.replaceNote({name: 'Ambusher', description: `The character inflicts ${character.getVariable('ambush', {key: 'damage'})} extra damage when making ${character.getVariable('ambush', {key: 'attackType'}).join(' or ')} attacks against opponents who are ${character.getVariable('ambush', {key: 'targetRequirement'}).join(' or ')}, limit once per target per round.`});
    }
  },
  combatReflexes: {
    displayName: "Combat Reflexes",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "The character gains a second reaction each turn, this reaction can only be used to make a free attack.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'combatReflexes'),
    apply: character => {
      character.updateVariable("reactionPointsAdjustment", 1);
      character.addNote({name: 'Combat Reflexes', description: `The additional reaction(s) made avaiable by combat reflexes traits can only be used to make free attacks.`});
    }
  },
  combatReflexesAdvanced: {
    displayName: "Combat Reflexes, Advanced",
    type: "Combat",
    requirements: ["Combat Reflexes"],
    requirementsDescription: "Combat Reflexes",
    keywords: ["Simple"],
    description: "Gain an additional reaction point each turn, a character can not have more reaction points than action points.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'combatReflexes') && character.actionPoints > character.reactionPoints,
    apply: character => {
      character.updateVariable("reactionPointsAdjustment", 1);
    }
  },
  combatReflexesImproved: {
    displayName: "Combat Reflexes, Improved",
    type: "Combat",
    requirements: ["Combat Reflexes"],
    requirementsDescription: "Combat Reflexes",
    keywords: ["Simple"],
    description:
      "The additional reaction gained from *combat reflexes* can now be used for any reaction.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'combatReflexes') && !character.traits.some(trait => trait.id === 'combatReflexesImproved'),
    apply: character => {
      character.deleteNote('Combat Reflexes');
    }
  },
  dangerSense: {
    displayName: "Danger Sense",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character is never *flat footed* when conscious and unrestrained.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'dangerSense'),
    apply: character => {
      character.addNote({name: 'Danger Sense', description: "When conscious and unrestrained, you are never flat footed. "});
    }
  },
  dangerSenseImproved: {
    displayName: "Danger Sense, Improved",
    type: "Combat",
    requirements: ["Danger Sense"],
    requirementsDescription: "Danger Sense",
    keywords: ["Heroic"],
    description:
      "The character still benefits from their melee, ranged, and mental defense bonuses when *surprised*, conscious, and unrestrained.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'dangerSense') && !character.traits.some(trait => trait.id === 'dangerSenseImproved'),
    apply: character => {
      character.replaceNote({name: 'Danger Sense', description: "When conscious and unrestrained, you are never flat footed and still benifit from your melee, ranged, and mental defense bonuses when surprised."});
    }
  },
  dangerSenseHeroic: {
    displayName: "Danger Sense, Heroic",
    type: "Combat",
    requirements: ["Danger Sense, Improved"],
    requirementsDescription: "Improved Danger Sense",
    keywords: ["Heroic"],
    description:
      "The character may act on rounds when they are surprised, if their initiative would be before all non-surprised enemies they act after the enemy with the highest initiative.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'dangerSenseImproved') && !character.traits.some(trait => trait.id === 'dangerSenseHeroic'),
    apply: character => {
      character.replaceNote({name: 'Danger Sense', description: "When conscious and unrestrained, you are never flat footed, still benifit from your melee, ranged, and mental defense bonuses and can act when surprised (if you would go before a non surprised character set your initiative to one less than  that  character's initiative)."});
    }
  },
  dualWeilder: {
    displayName: "Dual Weilder",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character can make the off-hand attack combat action with weapons that have the *light* or *balanced* and the *one-handed* or *hand-and-a-half* traits.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'dualWeilder'),
    apply: character => {
      // TODO consider if this needs to set some variable once skill checks/combat actions are implemented for a character.
      character.addNote({name: 'Dual Weilder', description: "You can make off-hand attacks with weapons that have either the light or balanced trait as well as the one-handed or hand-and-a-half traits."});
    }
  },
  dualWeilderHeavy: {
    displayName: "Dual Weilder, Heavy",
    type: "Combat",
    requirements: ["Dual Weilder"],
    requirementsDescription: "Dual Weilder",
    keywords: ["Simple"],
    description:
      "The character can wield any weapon without the *two-handed* trait in their off hand and make off handed attacks with them.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'dualWeilder') && !character.traits.some(trait => trait.id === 'dualWeilderHeavy'),
    apply: character => {
      // TODO consider if this needs to set some variable once skill checks/combat actions are implemented for a character.
      character.replaceNote({name: 'Dual Weilder', description: "You can make off-hand attacks with weapons so long as they do not have the two-handed trait."});
    }
  },
  duelist: {
    displayName: "Duelist",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character may spend one action point on their turn to choose one character within this trait's range of 10 hexes to be their dueling opponent. The character may spend their reaction to add one penalty die to an attack's skill check against them made by their dueling opponent provided the attack was made from within range and no other character is within melee range of them. A character ceases to be a dueling opponent if another character is made a dueling opponent or if they leave the character's sight for a full round.",
    isCharacterEligible: character => !character.traits.some(trait => trait.id === 'duelist'),
    apply: character => {
      character.updateVariable('duelist', 10, {key: 'range'});
      character.updateVariable('duelist', 'an attack skill check', {key: 'skillChecks', type: 'string'});
      character.updateVariable('duelist', ', provided no other characters are within your melee range', {key: 'condition', type: 'string'});
      character.updateVariable('duelist', '', {key: 'bonus', type: 'string'});
      character.addNote({name: 'Duelist', description: utils.duelistDescription(character)});
    }
  },
  duelistDefensive: {
    displayName: "Duelist, Defensive",
    type: "Combat",
    requirements: ["Duelist"],
    requirementsDescription: "Duelist",
    keywords: ["Simple"],
    description:
      "When the character spends their reaction to add a penalty die to their dueling opponent they now add one penalty die to all eligible attacks from their opponent until the character's next turn.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'duelist') && !character.traits.some(trait => trait.id === 'duelistDefensive'),
    apply: character => {
      character.updateVariable('duelist', 'any attack skill checks', {key: 'skillChecks', type: 'string'});
      character.replaceNote({name: 'Duelist', description: utils.duelistDescription(character)});
    }
  },
  duelistDistance: {
    displayName: "Duelist, Distance",
    type: "Combat",
    requirements: ["Duelist"],
    requirementsDescription: "Duelist",
    keywords: ["Simple"],
    description: "The range for Duelist's effects is increased by 20 hexes.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'duelist'),
    apply: character => {
      character.updateVariable('duelist', 20, {key: 'range'});
      character.replaceNote({name: 'Duelist', description: utils.duelistDescription(character)});
    }
  },
  duelistMelee: {
    displayName: "Duelist, Melee",
    type: "Combat",
    requirements: ["Duelist"],
    requirementsDescription: "Duelist",
    keywords: ["Simple"],
    description:
      "The character no longer requires that no other character is within melee range of them to use their reaction to gain benefits from duelist traits.",
    isCharacterEligible: character => character.traits.some(trait => trait.id === 'duelist'),
    apply: character => {
      character.updateVariable('duelist', '', {key: 'condition', type: 'string'});
      character.replaceNote({name: 'Duelist', description: utils.duelistDescription(character)});
    }
  },
  duelistHeroic: {
    displayName: "Duelist, Heroic",
    type: "Combat",
    requirements: ["Two Dualist Traits"],
    requirementsDescription: "Two Dualist Traits",
    keywords: ["Heroic"],
    description:
      "When the character spends their reaction to grant a penalty die to one or more attacks by their dueling opponent they gain one bonus die on their next eligible attack against their dueling opponent before the end of their next turn.",
    isCharacterEligible: character => character.traits.filter(trait => trait.id.includes('duelist')).length > 1,
    apply: character => {
      character.updateVariable('duelist', ', if at least one attack skill check is affected in this way you gain a bonus die to your first attack skill check against your dueling opponent before the end of your next turn', {key: 'bonus', type: 'string'});
      character.replaceNote({name: 'Duelist', description: utils.duelistDescription(character)});
    }
  },
  fastReflexes: {
    displayName: "Fast Reflexes",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "For each time a character has this trait they gain a +1 bonus to their initiative."
  },
  fueledByPain: {
    displayName: "Fueled by Pain",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "If a character suffers one or more wounds after fully resolving the damage they regain all missing stamina and all non-magic actions they take on their next turn have a stamina cost of 0."
  },
  mobileCombatant: {
    displayName: "Mobile Combatant",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character gains a mobile combat defense bonus against free attacks provided they have not taken the disengage action this turn, this bonus is equal to their melee defense bonus."
  },
  mobileCombatantImproved: {
    displayName: "Mobile Combatant, Improved",
    type: "Combat",
    requirements: ["Mobile Combatant"],
    requirementsDescription: "Mobile Combatant",
    keywords: ["Simple"],
    description:
      "The character gains their mobile combatant defense bonus to free attacks even if they've taken the disengage action this turn."
  },
  mobileCombatantHeroic: {
    displayName: "Mobile Combatant, Heroic",
    type: "Combat",
    requirements: ["Mobile Combatant, Improved"],
    requirementsDescription: "Improved Mobile Combatant",
    keywords: ["Heroic"],
    description: "The character no longer provokes free attacks."
  },
  multiAttack: {
    displayName: "Multi-Attack",
    type: "Combat",
    requirements: ["custom"],
    requirementsDescription: "",
    keywords: ["Heroic"],
    description:
      "The first time the character would receive a penalty die to an attack skill check as a result of their multi-attack penalty reduce that penalty by one."
  },
  quickDraw: {
    displayName: "Quick Draw",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The first *ready/stow item* action the character takes each turn has an action point cost of 0."
  },
  quickDrawHeroic: {
    displayName: "Quick Draw, Heroic",
    type: "Combat",
    requirements: ["Quick Draw, Improved"],
    requirementsDescription: "Improved Quick Draw",
    keywords: ["Heroic"],
    description:
      "The character may ready or stow the weapon used in any weapon attack they make."
  },
  recklessAttacker: {
    displayName: "Reckless Attacker",
    type: "Combat",
    requirements: [],
    requirementsDescription: "",
    keywords: ["Simple"],
    description:
      "The character may choose to spend one stamina before making a basic or brawling attack on their turn, if they do they gain a a bonus die to the melee attack skill check related to this attack. If a character uses this ability one or more times on their turn all melee attacks made against them until the begining of their next turn gain a a bonus die on their skill checks."
  },
  recklessAttackerImproved: {
    displayName: "Reckless Attacker, Improved",
    type: "Combat",
    requirements: ["Reckless Attacker"],
    requirementsDescription: "Reckless Attacker",
    keywords: ["Heroic"],
    description:
      "The character may choose to trigger their reckless attack trait on any melee attack action, not just basic and brawing attacks."
  }
};

module.exports = traitsData;
