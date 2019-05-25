Damage system + defense/stamina/wound refactor:

Defense - resource that is lowered by number of wounds the character has and by distracting attacks.

    Starting defense should range from 8-16
    Base Defense - 8 + ref + per + size (possible range of 7 - 11 for size zero characters)
    Type specific defense based on one primary skill (max starting +2)
        - Melee: melee combat
        - Ranged: awareness
        - Magic: discipline
    Equipment specific bonuses (static or action dependent?)
        - parry: vs melee only (activated by defensive stance action)
        - shield: vs melee and range (always active)
    Actions can grant temporary bonuses
        - defensiveStance: bonus vs melee attacks based on the parry secondary skill and equipped weapons.
        - disengage: all free attacks made against you until the beginning of your next turn are made two two levels of disadvantage.
        - dodge: bonus vs ranged attacks based on dodge secondary skill and movement?



Stamina - starts at 10, instead of adding to it increase regen with stamina/endurance skills.

Fatigue - character can take a point of fatigue to regain all stamina, happens automatically if they reduce themselves to zero stamina. Fatigue reduces a character's max stamina.
recovering a fatigue takes two hours of rest, recovers twice as fast while sleeping.

Wounds - starts at ~4 effects TBD
each wound taken reduces defense and stamina by one.
character with half or less of their wounds left gains a penalty die to all skill checks.
character with no wounds left gains additional penalty die to all skill checks.
character with no wounds left that takes additional wound dies.
recovering one wound takes three times the total number of wounds the character has - character's body days while they are resting and twice as long if they are being active (minimum one); medical attention and magic may reduce this time.
ex. a character with +0 body and three wounds takes 18 days to fully recover (9 for the first wound while the character has three wounds, 6 for the second, and 3 for the last) while a character with a +2 body takes only 12 days (7 for the first wound, 4 for the second, and only 1 for the last).





Damage - damage reduces stamina, if stamina hits zero inflicts a wound and refreshes stamina.
    - all-weapons: damage 4 + twice the wielder's body stat. If wielded two handed treat the wielder's body stat as if it were one higher. Reach 0-2;


Melee weapons have traits:
one of - Quality:
    - crude: -1 damage, 1 level of disadvantage on attacks, looses parrying trait.
    - simple: -1 damage.
    - standard: no effect, assumed if no quality is listed.

one of - balance:
    - balanced: parrying weapon.
    - light: can be wielded off-handed, - 1 damage, melee defense bonus (if any), and max reach.
    - pole-arm: +1 max reach one handed, +2 max reach if hand-and-a-half, double min and max reach if two-handed.
    - protective: can be wielded off-handed, parrying weapon, -3 damage, -1 max reach.
    - weighted: add wielder's body stat if positive to damage, -1 max reach.

one of - Size:
    - one-handed: + 1 melee defense bonus, cannot be wielded two-handed.
    - hand-and-a-half: may be wielded two handed.
    - two-handed: + 1 damage, must be wielded two-handed, + 1 min and max reach.

one of - type or custom:
    - *axe*
        - Damage Type: penetrating
        - APV: 0
        - Special Rules: once per attack if this weapon would inflict a wound deal increase the attack's damage by 50%, round up.
        - Additional Success Uses: one damage and one APV.
    - *blade, small*
        - Damage Type: penetrating
        - APV: 2
        - Restrictions: size one-handed only.
        - Special Rules: if its damage is converted to concussive if it would inflict a wound, instead leave the target at one stamina.
        - Additional Success Uses: one damage, or two armor piercing value.
    - *blade, long*
        - Damage Type: penetrating
        - APV: 3
        - Special Rules: treat the wielder's rank in the parry secondary skill as one higher than it is.
        - Additional Success Uses: one damage, or one armor piercing value.
    - *bludgeoning*
        - Damage Type: concussive
        - APV: N/A
        - Special Rules: add the wielder's strength to this weapon's damage an additional time, if it would increase its damage.
        - Additional Success Uses: one damage.
    - *shield*
        - Damage Type: concussive
        - APV: N/A
        - Restrictions: cannot be two-handed.
        - Special Rules: provides shield bonus (+2) to melee defense bonus and ranged defense bonus against attacks they are aware of.
        - Additional Success Uses: one damage.
    - *spear*
        - Damage Type: penetrating
        - APV: 3
        - Special Rules: TBD
        - Additional Success Uses: one damage and one APV.

zero or more of - special:
    - *armor piercing(x)* this style of weapon is especially good at penetrating or finding gaps in armor, increase the weapons APV by x.
    - *bash* can be used to make the *bash* melee combat action.
    - *exotic* attacks with this weapon add a level of disadvantage to the attack's skill check.
    - *heavy(x)* a character without with a body attribute of less than x gains levels of disadvantage equal to the difference when attacking with this weapon, can not make free attacks with it, and cannot benefit from its parry or shield stats; if the character would gain more than two levels of disadvantage as a result of this trait they cannot attack with it at all.
    - *martial(x)* characters without at least x ranks in the melee combat skill gain a level of disadvantage on skill checks with this weapon.
    - *reach(x, y)* increase the weapon's min reach by x and max reach by y.
    - *sap* can be used to make the *sap* melee combat action.
    - *thrown(X + Y)* the weapon is ranged, it has a close range and range increment of X + Y times body stat hexes. If a target is far enough away that the attack would gain 4 levels of disadvantage from range the attack automatically fails.
    - *trip* can be used to make the *trip* melee combat action.

Armor
  - Armor value: compared to APV
