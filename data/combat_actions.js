const combatActionsData = {
    walk: {
        displayName: "Walk",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 0,
        description: "Move up to 3 hexes, this movement provokes free attacks when the character moves from a hex that is threatened by an enemy to one that is not."
    },
    dash: {
        displayName: "Dash",
        type: "Movement",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Move up to the character's speed in hexes, this movement provokes free attacks when the character moves out of a threatened hex."
    },
    sprint: {
        displayName: "Sprint",
        type: "Movement",
        actionPointCost: 3,
        staminaCost: 3,
        description: "Move up to the three times the character's speed in hexes then make a *sprint* skill check and move up to one additional hex for every point by which the skill check increased their movement, this movement provokes free attacks when the character moves into or out of of a threatened hex."
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
        staminaCost: 1,
        description: "Make an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results."
    },
    bash: {
        displayName: "Bash",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 2,
        description: "Make an attack with a readied melee weapon with the bash keyword. The character makes a *melee attack skill check*. The skill check gains a penalty die if the character does not have at least one rank in the *bash secondary skill (melee combat)*. If the attack hits the target suffers its damage, converted to concussive it if would have been otherwise, and the target is pushed back X hexes, where X is equal to the attacker's rank in the *bash secondary skill (melee combat)* hexes. Additional successes may each be spent to knock the target back an additional hex. The total distance the target is knocked back is reduced by the sum of the target's *size*, if positive, and *body* stat. If the target was knocked back at least one plus their reflexes stat hexes they are rendered prone at the end of the knock back movement."
    },
    bullRush: {
        displayName: "Bull Rush",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 2,
        description: "Make a brawling attack or attack with an equipped shield attempting to push the target back. The character makes a *melee attack skill check* and applies the results. The skill check uses *body* instead of *reflexes* as the primary attribute, gains one penalty die if the character does not have at least one rank in the *bull rush secondary skill (melee combat)* and the target's *melee defense bonus* does not benefit from any shield(s) they may be wielding. If the attack hits the target is pushed back X hexes, where X is equal to the attacker's rank in the *bull rush secondary skill (melee combat)* hexes. Additional successes may only be spent to knock the target back an additional hex unless the movement has caused the target to hit a solid surface, such as a wall, in which case additional successes can be used to increase the attack's damage by one. The total distance the target is knocked back is reduced by the sum of the target's *size*, if positive, and *body* stat. If the target was knocked back at least one plus their reflexes stat hexes they are rendered prone at the end of the knock back movement. The attacker travels with the target as they are knocked back and may, if they choose, end their movement up to their body stat hexes before the target does."
    },
    brawling: {
        displayName: "Brawling",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make an attack with the character's fists, feet, or natural weapon. The character makes a *melee attack skill check* and applies the results. Increase this attacks damage by the character's rank in the *brawling secondary skill (melee combat)*."
    },
    disarm: {
        displayName: "Disarm",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 2,
        description: "Make a brawling attack or an attack with a readied melee weapon with the aim to disarm the target rather than harm them. The character makes a *melee attack skill check*. The skill check gains a penalty die if the character doesn't have at least one rank in the *disarm secondary skill (melee combat)*, an additional penalty die if the character is unarmed unless they have at least two ranks in the *disarm secondary skill (melee combat)*, and an additional penalty die if the target is wielding their weapon in two hands. If the attack was performed unarmed and the skill check failed the attacker suffers the effects of being hit by the weapon they were attempting to disarm as if the attacker had a *body* of 0 and no extra successes on the attack skill check. If the skill check succeeds it deals 0 damage and the targeted weapon is knocked to the ground at the target's feet, additional successes may be used to knock the disarmed weapon an additional hex away from the target, 5 minus the character's rank in the *disarm secondary skill (melee combat)* additional successes may be spent to allow a character in the same hex as the weapon to ready it provided they have a free hand, if the character readying the weapon is not the same character making this attack they must spend their reaction to ready it. Note that the attack can still have extra successes spent to increase its damage as usual."
    },
    distractingAttack: {
        displayName: "Distracting Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 2,
        description: "Make a brawling attack or an attack with a readied meleey weapon designed to distract the target more than harm them. The character makes a *melee attack skill check* and applies the results. The skill check gains a penalty die if the character doesn't have at least one rank in the *distracting attack secondary skill (melee combat)*. On a near or complete success reduce the target's defense by one plus the character's rank in the *distracting attack secondary skill (melee combat)* against the next attack made against them before the begining of the attacker's next turn. If this attack would inflict a wound instead the target remains at one stamina."
    },
    flurryOfBlows: {
        displayName: "Flurry of Blows",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 2,
        description: "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check*. The skill check gains one bonus die. If this attack hits ignore the character's body stat, if it's positive, for purposes of calculating damage. Ignore any additional successes from this skill check in excess of the character's rank in the *flurry of blows secondary skill (melee combat)*."
    },
    offHandAttack: {
        displayName: "Off-Hand Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 1,
        description: "Make a brawling attack or an attack with a readied weapon with both the *light* and *one-handed* traits that the chararcter has not attacked with yet this turn. The character makes a *melee or ranged attack skill check* as appropriate to the weapon and applies the results. This skill check gains one penalty die unless the character has at least one rank in the *off-hand attack secondary skill (melee combat)* and ignores any penalty dice the character would have as a result of a multi-action penalty. Ignore any additional successes on this skill check in excess of the character's rank in the *off-hand attack secondary skill (melee combat)*. Limit once per turn."
    },
    powerAttack: {
        displayName: "Power Attack",
        type: "Melee",
        actionPointCost: 1,
        staminaCost: 2,
        description: "Make a brawling attack or an attack with a readied melee weapon. The character makes a *melee attack skill check*. This skill check has one penalty die added to it if the character does not have at least one rank in the *power attack secondary skill (melee combat)* and one penalty die added to it unless the character performed a dash action this turn immediately before making this attack. If the attack hits treat the character's body stat as one plus the character's rank in the *power attack secondary skill (melee combat)* higher than it is."
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
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character readies themselves to continue an extended melee. They gain a bonus to their melee defense until the begining of their next turn, this bonus is equal to their rank in the *parry secondary skill(personal defense)* if they are wielded a parrying weapon."
    },
    disengage: {
        displayName: "Disengage",
        type: "Defensive",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character carefully disengages from their opponent and moves carefully through the battlefield. All melee attacks made agasint the character gain a penalty die until the end of the character's turn."
    },
    dodge: {
        displayName: "Dodge",
        type: "Defensive",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character bobs and weaves, zig zags, and generally makes themselves a difficult target for ranged attacks. They gain a + 1 bonus to their ranged defense until the begining of their next turn, this bonus is increased by their rank in the *dodge secondary skill(personal defense)*."
    },
    restorationAction: {
        displayName: "Restoration Action",
        type: "Defensive",
        actionPointCost: 1,
        staminaCost: 0,
        description: "The character does their best to catch their breath and reposition themselves. They regain 2 plus the product of one plus their ranks in the *endurance primary skill* and thir rank in the *stamina secondary skill (endurance)* stamina."
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
