
// These will replace the arcane traits in the traits file once they've been reworked. 
module.exports = {
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
  }
};
