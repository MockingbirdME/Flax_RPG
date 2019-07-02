Damage system + defense/stamina/wound refactor:

Defense - resource that is lowered by number of wounds the character has and by distracting attacks.

    Starting defense should range from 8-16
    Base Defense - 8 + ref + per + size (possible range of 7 - 11 for size zero characters)

    Equipment specific bonuses (static or action dependent?)
        - parry: vs melee only (activated by defensive stance action)
        - shield: vs melee and range (always active)



Fatigue - character can take a point of fatigue to regain all stamina, happens automatically if they reduce themselves to zero stamina. Fatigue reduces a character's max stamina.
recovering a fatigue takes two hours of rest, recovers twice as fast while sleeping.




Damage -
    - all-weapons: damage 4 + twice the wielder's body stat. If wielded two handed treat the wielder's body stat as if it were one higher. Reach 0-2;


Melee weapons have traits:
one of - Quality:
    - crude: -1 damage, 1 penalty die on attacks, looses parrying trait.
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
    - *exotic* attacks with this weapon add a penalty die to the attack's skill check.
    - *heavy(x)* a character without with a body attribute of less than x gains penalty dice equal to the difference when attacking with this weapon, can not make free attacks with it, and cannot benefit from its parry or shield stats; if the character would gain more than two penalty dice as a result of this trait they cannot attack with it at all.
    - *martial(x)* characters without at least x ranks in the melee combat skill gain a penalty die on skill checks with this weapon.
    - *reach(x, y)* increase the weapon's min reach by x and max reach by y.
    - *sap* can be used to make the *sap* melee combat action.
    - *thrown(X + Y)* the weapon is ranged, it has a close range and range increment of X + Y times body stat hexes. If a target is far enough away that the attack would gain 4 penalty dice from range the attack automatically fails.
    - *trip* can be used to make the *trip* melee combat action.

Armor
  - Armor value: compared to APV





  Magic - Have a focus check that's required when a character takes damage from an outside source or wounds from any source. Consider something like difficulty 11 or the total amount of damage inflicted, or 5 plus damage inflicted, or something like that, where a success lets the caster choose one ongoing effect (with a duration success in it) to keep going, additional successes allow an extra success each to be up-kept.


Action refactor:

Provide less specific options but limit to one each so we can build in limits and penalties individually.
