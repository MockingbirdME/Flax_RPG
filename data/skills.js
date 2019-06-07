let skillsData = {
    animalHandling: {
        displayName: "Animal Handling",
        description: "How familiar is the character with animals, particularly domestic ones. This skill should be used when dealing with an animal that has a chance of being controlled or calmed.",
        secondarySkills: {
            befriend: {
                displayName: "Befriend",
                description: "coaxing animals to be friendly towards the character and potentially even taming them, this is the relevant secondary skill for the befriend animal skill check."
            },
            ride: {
                displayName: "Ride",
                description: "charging on a warhorse or getting a donkey to willingly traverse a swaying bridge the ride skill is used to determine what animals will obey your command and can be used in place in the balance and trian/command animals skill checks in place of their normal secondary skills for riding related tasks."
            },
            train: {
                displayName: "Train",
                description: "training and commanding animals to act as the character wishes, this is the relevant secondary skill for the train/command animals skill check."
            }
        }
    },
    alchemy: {
        displayName: "Alchemy",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    awareness: {
        displayName: "Awareness",
        description: "The quintessential perception skill, is used when looking for loot or information as well as noticing threats both passively and when actively looking for them.",
        secondarySkills: {
            alertness: {
                displayName: "Alertness",
                description: "being aware of danger and other happenings around the character, this secondary skill is the relevant secondary skill for the alertness skill check."
            },
            investigate: {
                displayName: "Investigate",
                description: "looking for clues and gathering information it is the relevant secondary skill for the investigate area skill check."
            },
            search: {
                displayName: "Search",
                description: "looking for valuables and sussing out the best hiding places for items and people it is the relevant secondary skill for the search area skill check."
            },
            senseMotive: {
                displayName: "Sense Motive",
                description: "reading people and being able to tell when they're lying or acting it is the relevant secondary skill to the sense motive skill check."
            }
        }
    },
    craftArtist: {
        displayName: "Craft (Artist)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    craftChemistry: {
        displayName: "Craft (Chemistry)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    craftCooking: {
        displayName: "Craft (Cooking)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    craftMason: {
        displayName: "Craft (Mason)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    craftSmith: {
        displayName: "Craft (Smith)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    craftWoodworker: {
        displayName: "Craft (Woodworker)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    discipline: {
        displayName: "Discipline",
        description: "A measure of a character’s self control. This skill should be used when a character has to act against their desires or when otherwise compelled to do something they're trying not to.",
        secondarySkills: {
            command: {
                displayName: "Command",
                description: ""
            },
            concentrate: {
                displayName: "Concentrate",
                description: ""
            },
            resistFear: {
                displayName: "Resist Fear",
                description: ""
            }
        }
    },
    endurance: {
        displayName: "Endurance",
        description: "A measure of a character’s resistance to exhaustion. The skill should be used when a character is avoiding or resisting an effect such as fatigue or poison as well as when recovering from injury or illness.",
        secondarySkills: {
            holdBreath: {
                displayName: "Hold Breath",
                description: "operating with limited air is important under water and when dealing with noxious fumes or a spray of spores, it is the relevant secondary skill for the hold breath skill check."
            },
            remainConscious: {
                displayName: "Remain Conscious",
                description: "gritting ones teeth and shaking off the pain, blow to the head, or lack of oxygen, it is the relevant secondary skill for the remain concious skill check."
            },
            stamina: {
                displayName: "Stamina",
                description: "maintaining performance without taking a break, this secondary skill is used in the calcuation of the restoration action."
            }
        }
    },
    knowledgeAcademics: {
        displayName: "Knowledge (Academics)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    knowledgeLore: {
        displayName: "Knowledge (Lore)",
        description: "",
        secondarySkills: {
            exampleSkill: {
                displayName: "",
                description: ""
            }
        }
    },
    legerdemain: {
        displayName: "Legerdemain",
        description: "Members of the various underworlds of Flax or the government's covert programs practice all manor of clandestine arts.",
        secondarySkills: {
            picklocks: {
                displayName: "Picklocks",
                description: "opening or relocking doors, chests, or padlocks that the character does not have a key for, it is the primary secondary skill for the pick locks skill check."
            },
            slightOfHand: {
                displayName: "Slight of Hand",
                description: ""
            },
            thievesCant: {
                displayName: "Thieves' Cant",
                description: ""
            }
        }
    },
    medicine: {
        displayName: "Medicine",
        description: "Court physicians to midwifes and witch doctors all use their skills to heal the sick and prevent medical misfortune.",
        secondarySkills: {
            diagnoses: {
                displayName: "Diagnoses",
                description: ""
            },
            firstAid: {
                displayName: "First Aid",
                description: ""
            },
            medicine: {
                displayName: "Medicine",
                description: ""
            },
            surgery: {
                displayName: "Surgery",
                description: ""
            },
            woundType: {
                displayName: "Wound Type",
                description: ""
            }
        }
    },
    magicalAptitude: {
        displayName: "Magical Aptitude",
        description: "How well trained in magic a character is. Characters with an arcane trait will use this skill for crafting magical effects and casting spells.",
        secondarySkills: {
            individualArcanePower: {
                displayName: "Individual Arcane Power",
                description: ""
            },
            individualArcaneTheme: {
                displayName: "Individual Arcane Theme",
                description: ""
            }
        }
    },
    meleeCombat: {
        displayName: "Melee Combat",
        description: "How well a character fights with a sword, axe, or fists. Melee combat skill is most often used when fighting in close quarters but also has a place in many sporting activities.",
        secondarySkills: {
            attackType: {
                displayName: "Attack Type",
                description: "many melee actions have a specific benefit from having ranks in the secondary skill of the same name."
            }
        }
    },
    performance: {
        displayName: "Performance",
        description: "Playing musical instruments, acting, or giving a speech are all variations of performance.",
        secondarySkills: {
            acting: {
                displayName: "Acting",
                description: ""
            },
            instrument: {
                displayName: "Instrument",
                description: ""
            },
            oration: {
                displayName: "Oration",
                description: ""
            },
            singing: {
                displayName: "Singing",
                description: ""
            }
        }
    },
    personalDefense: {
        displayName: "Personal Defense",
        description: "How apt a character is at avoiding getting hit or keeping themselves from harm. This skill affects the character’s defense.",
        secondarySkills: {
            armor: {
                displayName: "Armor",
                description: ""
            },
            dodge: {
                displayName: "Dodge",
                description: ""
            },
            parry: {
                displayName: "Parry",
                description: ""
            },
            shields: {
                displayName: "Shields",
                description: ""
            }
        }
    },
    personalMovement: {
        displayName: "Personal Movement",
        description: "A character’s speed and competency during their natural movements. Used whenever a character’s speed and footing comes into question.",
        secondarySkills: {
            balance: {
                displayName: "Balance",
                description: "keeping ones footing when the footing is precarious, this is the relevant secondary skill for the balance skill check."
            },
            climb: {
                displayName: "Climb",
                description: "scaling a ladder, wall, or other climbable surface this is the relevant secondary skill for the climb skill check and combat action."
            },
            fly: {
                displayName: "Fly",
                description: ""
            },
            jump: {
                displayName: "Jump",
                description: "leaping from rooftop to rooftop or across gullies, this is the relevant secondary skill for the jump skill check."
            },
            run: {
                displayName: "Run",
                description: "overland travel speed both over long distance and sprints, this is the relevant secondary skill for the flee/pursuit and sprint skill checks."
            },
            swim: {
                displayName: "Swim",
                description: "flailing to avoid drowning long enough to be rescued or gliding through the water like an eel swim is the relevant secondary skill for the swim skill check and combat action."
            },
            tumbling: {
                displayName: "Tumbling",
                description: "rolling with a fall to minimize damage, this is the relevant secondary skill for the tumble skill check."
            }
        }
    },
    rangedCombat: {
        displayName: "Ranged Combat",
        description: "Many characters have need to hit a target from a distance for combat, hunting, or sport.",
        secondarySkills: {
            aim: {
                displayName: "Aim",
                description: "enhancing one's chance of hitting at range, not all weapons can be used to aim. This secondary skill directly impacts the effect of the aim combat action."
            },
            reload: {
                displayName: "Reload",
                description: "drawing and loading ammunition for various weapon types, this secondary skill directly impacts the number of pieces of ammunition that can be readied at once and may have an affect in reloading various types of ranged weapons."
            },
            weaponType: {
                displayName: "Weapon Type",
                description: "each type of weapon (bows, crossbows, pistols, spells, thrown, etc.) have their own secondary skill. This secondary skill is used to determine if the character is proficient in a given weapon and is the relevant secondary skill for the ranged attack skill check."
            }
        }
    },
    stealth: {
        displayName: "Stealth",
        description: "How well a character conceals themselves or something/someone else as well as how well they may disguise themselves or move in such a way as to avoid notice.",
        secondarySkills: {
            coverTracks: {
                displayName: "Cover Tracks",
                description: ""
            },
            disguise: {
                displayName: "Disguise",
                description: ""
            },
            hide: {
                displayName: "Hide",
                description: ""
            },
            sneak: {
                displayName: "Sneak",
                description: ""
            }
        }
    },
    survival: {
        displayName: "Survival",
        description: "How well a character can keep themselves alive and healthy outside of civilization or when in the less comfortable parts of it.",
        secondarySkills: {
            findBuildShelter: {
                displayName: "Find/Build Shelter",
                description: ""
            },
            forage: {
                displayName: "Forage",
                description: ""
            },
            hunt: {
                displayName: "Hunt",
                description: ""
            },
            specificEnvironment: {
                displayName: "Specific Environment",
                description: ""
            },
            track: {
                displayName: "Track",
                description: ""
            }
        }
    }
};

module.exports = skillsData;
