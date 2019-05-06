let combatActionsData = {
    walk: {
        displayName: "Walk",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 0,
        description: "Move up to 3 hexes."
    },
    dash: {
        displayName: "Dash",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Move up to the character's speed in hexes."
    },
    spring: {
        displayName: "Spring",
        type: "Movement",
        actionPointCost: 3,
        staminaCost: 3,
        description: "Move up to the three times the character's speed in hexes then make a *sprint* skill check and move up to one additional hex for every point by which the skill check increased their movement."
    },
    climb: {
        displayName: "Climb",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 0,
        description: ""
    },
    Jump: {
        displayName: "Jump",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 0,
        description: ""
    },
    swim: {
        displayName: "Swim",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 0,
        description: ""
    },
    basicAttack: {
        displayName: "Basic Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 0,
        description: "Make an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results."
    },
    bash: {
        displayName: "Bash",
        type: "Melee",
        requirements: "Weapon/attack with the *Bash* keyword that deals concussive damage.",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results. The skill check gains a level of disadvantage if the character does not have at least one rank in the *bash secondary skill (melee combat)*. If the attack hits the target back one hex, and the first X additional successes must be spent to knock the target prone where X is equal to one plus the target's *size*, if positive, plus the targets *body* and minus the attacker's rank in the *bash secondary skill (melee combat)*. If the character succeeds in knocking their target back one hex they may advance one hex as part of this action."
    },
    bullRush: {
        displayName: "Bull Rush",
        type: "Melee",
        requirements: "*body* of at least +1.",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or attack with an equipped shield attempting to push the target back. The character makes a *melee attack skill check* and applies the results. The skill check uses *body* instead of *reflexes* as the primary attribute, gains one level of disadvantage if the character does not have at least one rank in the *bull rush secondary skill (melee combat)* and the target's *melee defense bonus* does not benefit from any shield(s) they may be wielding. On a hit the target is pushed back one hex per rank the character has in the bull rush secondary skill (melee combat), and unless the target is pinned against a wall or other hard surface the first X additional successes must be spent to increase the distance the target is pushed by one hex where X is equal to the sum of the target's *body* and *size* (minimum one) after the first X successes have been spent each additional success increases the distance pushed by one hex; if the target is pushed into a wall or other hard surface increase the damage inflicted by the attack by the number of hexes the target was pushed and any remaining successes can be spent to increase the damage by two. The attacker moves with the target as they are pushed but may choose to stop a number of hexes, equal to their *body* attribute, short; doing so prevents them from using additional successes for extra damage."
    },
    brawling: {
        displayName: "Brawling",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 0,
        description: "Make an attack with the character's fists, feet, or natural weapon. The character makes a *melee attack skill check* and applies the results, on a complete success add a number of additional successes to the result equal to the character's rank in the *brawling secondary skill (melee combat)*."
    },
    disarm: {
        displayName: "Disarm",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied melee weapon with the aim to disarm the target rather than harm them. The character makes a *melee attack skill check* and applies the results. The skill check gains a level of disadvantage if the character doesn't have at least one rank in the *disarm secondary skill (melee combat)*, an additional level of disadvantage if the character is unarmed unless they have at least two ranks in the *disarm secondary skill (melee combat)*, and an additional level of disadvantage if the target is wielding their weapon in two hands. If the attack was performed unarmed and the skill check failed the attacker suffers the effects of being hit by the weapon they were attempting to disarm as if the attacker had a *body* of 0. If the skill check succeeds instead of inflicting damage the target's weapon (attacker's choice if wielding more than one) is knocked to the ground at their feet, each additional success may be used to knock the disarmed weapon an additional hex away from the target and 5 minus the character's rank in the *disarm secondary skill (melee combat)* additional successes may be spent to allow a character in the same hex as the weapon to ready it provided they have a free hand."
    },
    distractingAttack: {
        displayName: "Distracting Attack",
        type: "Melee",
        requirements: "at least one rank in the *distracting attack secondary skill (melee combat)*.",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied melee weapon designed to distract the target more than harm them. The character makes a *melee attack skill check* and applies the results. The skill check has two levels of disadvantage added to it, reduced by the character's rank in the *distracting attack secondary skill (melee combat)*. On a near success or greater result for the skill check reduce the target's defense by an additional amount equal to the character's rank in the *distracting attack secondary skill (melee combat)*, then ignore any additional successes."
    },
    flurryOfBlows: {
        displayName: "Flurry of Blows",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results. The skill check gains one level of advantage. Ignore any additional successes to the skill check but resolve the effects of the attack one plus the character's rank in the *flurry of blows secondary skill (melee combat)* times."
    },
    offHandAttack: {
        displayName: "Off-Hand Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied melee weapon with the *small* keyword in the character's off-hand. The character makes a *melee attack skill check* and applies the results. This skill check gains one level of disadvantage unless the character has at least one rank in the *off-hand attack secondary skill (melee combat)*, this is in addition to the penalty die gained for performing an attack with the character's off-hand. Ignore any additional successes on this skill check in excess of the character's rank in the *off-hand attack secondary skill (melee combat)*. If the character has taken a different melee action already turn, the first time they take this action they may ignore all levels of disadvantage generated for having already taken melee actions this turn."
    },
    powerAttack: {
        displayName: "Power Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results. This skill check has one level of disadvantage added to it if the character does not have at least one rank in the *power attack secondary skill (melee combat)*. If the attack hits it deals one plus the character's rank in the *power attack secondary skill (melee combat)* extra damage, double the extra damage if the character already performed a dash action this turn."
    },
    recklessAttack: {
        displayName: "Reckless Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results. The skill check gains one level of advantage. All melee attacks against the character gain one level of advantage until the beginning of the character's next turn."
    },
    aim: {
        displayName: "Aim",
        type: "Ranged",
        actionPointCost: 2,
        staminaCost: 0,
        description: "The character selects one target they can see and is within range of a readied, loaded, ranged weapon; their next attack against that target get's a bonus to the skill check equal to one plus the character's rank in the *aim (ranged combat)* secondary skill. An aiming character that moves or takes any non ranged attack action that requires a skill check is no longer aiming."
    },
    load: {
        displayName: "Load",
        type: "Ranged",
        actionPointCost: "varies",
        staminaCost: "varies",
        description: "The character loads one a ranged weapon. The action point cost and stamina cost of this action vary based on the weapon being loaded."
    },
    looseShootFire: {
        displayName: "Loose/Shoot/Fire",
        type: "Ranged",
        actionPointCost: 1,
        staminaCost: 0,
        description: "Make an attack with a readied, loaded, ranged weapon. The character makes a *ranged attack skill check* and applies the results."
    },
    overwatch: {
        displayName: "Overwatch",
        type: "Ranged",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character chooses an area within the range of their readied, loaded, ranged weapon, readied throwable weapon, or cast, throwable spell. The area can be no larger than one plus their rank in the *overwatch (ranged combat)* secondary skill hexes. Until the beginning of the character's next turn they may spend their reaction to make a ranged attack against a target who enters or moves within the selected area."
    },
    throw: {
        displayName: "Throw",
        type: "Ranged",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make an attack with a readied throwable weapon or cast throwable spell. The character makes a *ranged attack skill check* and applies the results."
    },
    castCantrip: {
        displayName: "Cast Cantrip",
        type: "Magic",
        actionPointCost: "varies",
        staminaCost: 2,
        description: "Cast one cantrip the caster knows, its action point cost is determined by the cantrip's selected speed effect. If the cantrip has an action point cost of zero and a range of self it takes effect immediately, if it has an action point cost of zero and a range of manifest the caster may take a manifest spell action with an action point cost of zero as their next action this turn."
    },
    castSpell: {
        displayName: "Cast Spell",
        type: "Magic",
        actionPointCost: "varies",
        staminaCost: "varies",
        description: "Cast one spell the caster knows by making a cast spell skill check with a difficulty based on the spell being cast, if the skill check is successful the character suffers arcane dues as detailed on the spell. This action's action point cost is determined by the spell's selected speed effect. If the spell has an action point cost of zero and a range of self it takes effect immediately, if it has an action point cost of zero and a range of manifest the caster may take a manifest spell action with an action point cost of zero as their next action this turn."
    },
    manifestSpell: {
        displayName: "Manifest Spell",
        type: "Magic",
        actionPointCost: 1,
        staminaCost: 0,
        description: "Make an attack with a cast manifestable spell. The character makes a *magic attack skill check* and applies the results."
    },
    gatherArcaneEnergy: {
        displayName: "Gather Arcane Energy",
        type: "Magic",
        actionPointCost: 2,
        staminaCost: 0,
        description: "Make a *gather arcane energy skill check* applying its results. If the character stored any arcane energy from this skill check they store it until used, losing one stamina each round they hold it for and losing the gathered energy if they suffer any wounds while holding it (losing this energy causes the caster to suffer arcane dues equal to the amount of arcane cost stored)."
    },
    releaseArcaneEnergy: {
        displayName: "Release Arcane Energy",
        type: "Magic",
        actionPointCost: 1,
        staminaCost: 1,
        description: "The character safely reduces the amount of arcane cost they have stored as energy by up to one plus their rank in the *gather arcane energy (magical aptitude)* secondary skill."
    },
    shapeArcaneEnergy: {
        displayName: "Shape Arcane Energy",
        type: "Magic",
        actionPointCost: 1,
        staminaCost: 1,
        description: ""
    },
    defensiveStance: {
        displayName: "Defensive Stance",
        type: "Defensive",
        requirements: "Cannot be taken on a turn the character performs an attack.",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character readies themselves to continue an extended melee. They make a regain composure skill check to regain defense and double their melee defense bonus until their next turn."
    },
    disengage: {
        displayName: "Disengage",
        type: "Defensive",
        requirements: "Cannot be taken on a turn the character performs an attack.",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character carefully disengages from their opponent and moves carefully through the battlefield. They make a regain composure skill check to regain defense and gain a situational 10 defense bonus against any free attacks until their next turn."
    },
    dodge: {
        displayName: "Dodge",
        type: "Defensive",
        requirements: "Cannot be taken on a turn the character performs an attack.",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character bobs and weaves, zig zags, and generally makes themselves a difficult target for ranged attacks. They make a regain composure skill check to regain defense, double their ranged defense bonus (not including any cover bonuses) and gain a situational defense bonus equal to the number of stamina spent on move actions this turn until their next turn."
    },
    restorationAction: {
        displayName: "Restoration Action",
        type: "Defensive",
        requirements: "Cannot be taken on a turn the character performs an attack.",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character does their best to catch their breath and reposition themselves. They make a restoration skill check to regain stamina."
    },
    readyStowItem: {
        displayName: "Ready Stow Item",
        type: "Other",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character readies up to one weapon or item or up to one plus their rank in the *reload secondary skill (ranged combat)* pieces of ammunition or stows the same number of currently readied weapons/items or pieces of ammunition."
    }
};

module.exports = combatActionsData;
