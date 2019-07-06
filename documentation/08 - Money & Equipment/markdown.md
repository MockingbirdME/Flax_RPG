## Currency
## Armor and Weapons
### Armor
Suits of armor have a number of properties:
  - **Armor Value:** The character may use the armor value of his equipped armor, if a character has multiple armor value options (such as from natural armor and from worn armor) they use the highest value and increase it by one for each additional source of armor.
  - **Resistance (type):** Most armor provides resistance to concussive and penetrating damage and some armor provides resistance to additional types as well. A character who receives resistance of a given type from multiple sources adds those values together to gain the full resistance value for that damage type.
  - **Required Training:** How difficult the armor is to be comfortable moving in, if the character wearing the armor doesn't have ranks in the *armor secondary skill (personal defense)* they receive one penalty die to all skill checks where reflexes is the primary attribute.
  - **Perception Penalty:** Helms only, the character wearing the armor suffers the armor's penalty in penalty dice on all perception skill checks while wearing the helmet portion of the armor.

#### Sample Armor:
  - **Gambeson, light** Thin cloth armor easy available to any town guard or would be adventurer.
    - Armor Value: 3
    - Resistance (Concussive): 2
    - Resistance (Penetrating): 0
    - Resistance (Cold): 1
    - Required Training: 1
    - Perception Penalty: 0
  - **Gambeson, heavy** Thicker Cloth armor, commonly worn by militia soldiers and poorer professional troops.
    - Armor Value: 4
    - Resistance (Concussive): 3
    - Resistance (Penetrating): 0
    - Resistance (Cold): 2
    - Required Training: 2
    - Perception Penalty: 1
  - **Mail, light** A short-sleeved mail shirt worn over a light gambeson, common armor for citizen soldiers.
    - Armor Value: 6
    - Resistance (Concussive): 3
    - Resistance (Cold): 1
    - Required Training: 2
    - Perception Penalty: 0
  - **Mail, heavy** A long-sleeved mail shirt and skirt worn by high end professional soldiers such as knights and men-at-arms.
    - Armor Value: 8
    - Resistance (Concussive): 4
    - Resistance (Cold): 2
    - Required Training: 3
    - Perception Penalty: 1


### Melee Weapons
All melee weapons start with the same base stats that are then modified by the various traits they possess.
**Base Stats:**
    - *damage:* 4 damage plus twice the wielder's body stat, treat their body stat as one higher than it normally is if the weapon is wielded two handed.

#### Melee Weapon Traits
All melee weapons have one each of the following Traits
**Quality:**
    - *crude:* -1 damage, 1 penalty die on attacks, looses parrying trait.
    - *simple:* -1 damage.
    - *standard:* no effect, assumed if no quality is listed.
**Balance:**
    - *balanced:* parrying weapon.
    - *light:* - 1 damage, melee defense bonus (if any), and max reach.
    - *pole-arm:* +1 max reach one handed, +2 max reach if hand-and-a-half, double min and max reach if two-handed.
    - *protective:* parrying weapon, -3 damage, -1 max reach.
    - *weighted:* add wielder's body stat if positive to damage, -1 max reach.
**Size:**
    - *one-handed:* + 1 melee defense bonus, cannot be wielded two-handed.
    - *hand-and-a-half:* may be wielded two handed.
    - *two-handed:* + 1 damage, must be wielded two-handed, + 1 min and max reach.
**Type:**
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

Additionally a melee weapon may have one or more of the following traits:
    - *armor piercing(x)* this style of weapon is especially good at penetrating or finding gaps in armor, increase the weapons APV by x.
    - *bash* can be used to make the *bash* melee combat action.
    - *exotic* attacks with this weapon add a penalty die to the attack's skill check.
    - *heavy(x)* a character without with a body attribute of less than x gains penalty dice equal to the difference when attacking with this weapon, can not make free attacks with it, and cannot benefit from its parry or shield stats; if the character would gain more than two penalty dice as a result of this trait they cannot attack with it at all.
    - *martial(x)* characters without at least x ranks in the melee combat skill gain a penalty die on skill checks with this weapon.
    - *reach(x, y)* increase the weapon's min reach by x and max reach by y.
    - *sap* can be used to make the *sap* melee combat action.
    - *thrown(X + Y)* the weapon is ranged, it has a close range and range increment of X + Y times body stat hexes. If a target is far enough away that the attack would gain 4 penalty dice from range the attack automatically fails.
    - *trip* can be used to make the *trip* melee combat action.



        <!-- TODO Update Range Weapons  -->
**Type, Ranged:** like melee weapon's ranged weapons have a number of traits that determine their stats, range weapon's often require ammunition that further modify their stats.
    - *bow*
      - Require skill and strength: all bows have the heavy trait many of its other stats are derived from the value of these traits. Additionally when resolving the effects of the weapon's heavy trait they may add their rank in the *bows secondary skill (ranged combat)* to their body stat.
      - Two Handed: all bows require two hands to wield.
      - Reload Rules: loading a bow with a ready arrow requires one action point and no stamina, a character may hold up to their rank in the *bows secondary skill (ranged combat)* arrows ready while using the weapon.
      - Base Close Range: twenty plus twice the weapon's *heavy* value hexes.
      - Base Range Increment: twenty plus twice the weapon's *heavy* value hexes.
      - Base Damage: equal to one plus the level of its *heavy* trait, if the character wielding it suffers any number of penalty dice due to the *heavy* trait reduce the base damage by the same amount.
      - Base Armor Piercing Value: equal to the level of its *heavy* trait minus one, if the character wielding it suffers any number of penalty dice due to the *heavy* trait reduce the base armor piercing value by the same amount.
      - Additional Success Uses: one damage or minus one damage and plus one armor piercing value.
    - *crossbow*
      - Weapon Strength: all crossbows have the strength trait, usually between 4 and 10, many of its other stats are derived from the value of these traits.
      - Two Handed: crossbows require two hands to wield.
      - Reload Rules: crossbows can be loaded in any of three ways:
        - Hand loading: a crossbow of strength equal to or less than 1 plus the character's body stat may be reloaded by hand requiring a load action costing 2 action points and no no stamina to cock it followed by a ready action to ready a crossbow bolt and a load action costing one action point to load the readied bolt.
        - Goats foot loading: a crossbow of strength equal to or less than 2 plus the character's body stat may be reloaded with a tool called a goats foot requiring a ready action to ready the goats foot, a load action costing 2 action points and no stamina to cock it, a stow action to stow the goats foot, a ready action to ready a crossbow bolt, and a load action costing one action point to load the readied bolt.
        - Winch loading: any crossbow may be loaded with a winch requiring a ready action to ready the winch, a load action costing 1 action points and no stamina to secure the winch to the butt of the crossbow, any number of load actions costing a total number of action points equal to the weapon's *strength* value and no stamina to cock it, a load action costing 1 action points and no stamina to remove the winch from the butt of the crossbow, a stow action to stow the winch, a ready action to ready a crossbow bolt, and a load action costing one action point to load the readied bolt.
      - Base Close Range: five times the weapon's *strength* value.
      - Base Range Increment: five times the weapon's *strength* value.
      - Base Damage: equal to the level of its *strength* trait.
      - Base Armor Piercing Value: equal to the level of its *strength* trait.
      - Additional Success Uses: one damage or minus one damage and plus one armor piercing value.
    - *crossbow, hand*
      - Weapon Strength: all hand crossbows have the strength trait, usually between 2 and 4, many of its other stats are derived from the value of these traits.
      - One Handed: hand crossbows can be fired one handed gaining a penalty die, are treated as *hand-and-a-half* weapons for the purposes of two weapon fighting, and require two hands to reload.
      - Reload Rules: loading a hand crossbow requires first hand cranking its string taut requiring no stamina and a number of action points equal to its strength trait's value, these action points need not be taken in succession as a hand crossbow's screw cranking mechanism holds its tautness until fired, the character must then, after readying a hand crossbow bolt, spend one action point and no stamina to load it.
      - Base Close Range: twice the weapon's *strength* value.
      - Base Range Increment: twice the weapon's *strength* value.
      - Base Damage: equal to the level of its *strength* trait.
      - Base Armor Piercing Value: equal to the level of its *strength* trait.
      - Additional Success Uses: one damage or minus one damage and plus one armor piercing value.
    - *pistol*
      - Damage Type:
      - Special Rules:
      - Additional Success Uses:
**Ammunition:** most ranged weapons utilize some kind of ammunition in order to loose/shoot/fire, like other weapon types ammunition has custom traits.
  - *arrow* all arrows will have one of the following traits, or a custom one not listed here.
    - Blunted: the arrow inflicts concussive damage.
    - Bodkin: the arrow inflicts penetrating damage, has its damage reduced by 5 if converted to concussive, and increases its armor piercing value by 2.
    - Broadhead: the arrow inflicts penetrating damage, has its damage reduced by 3 if converted to concussive, and increases its base damage value by 1.
  - *bolt/quarrel* all bolts/quarrels will have one of the following traits, or a custom one not listed here.
    - Blunted: the bolt/quarrel inflicts concussive damage.
    - Injection: the bolt/quarrel inflicts penetrating damage, has its damage reduced to 0 if converted to concussive, halves its base damage, and can be used to deliver injectable potions or mundane poisons.  
    - Standard: the bolt/quarrel inflicts penetrating damage.
**Special:** many weapons have additional attributes not directly tied to their balance, size, or general type.
  - *armor piercing(x)* this weapon reduces the target's armor value by x while resolving its attacks.
  - *bash* can be used to make the *bash* melee combat action.
  - *exotic(x)*
  - *strength(x)* the weapon has a strength of x (only relevant for certain ranged weapons).
  - *heavy(x)* a character without with a body attribute of less than x gains penalty dice equal to the difference when attacking with this weapon, can not make free attacks with it, and does not benefit from any defense bonuses from it; if the character would gain more than two penalty dice as a result of this trait they cannot attack with it at all.
  - *ranged(close range, range increment)* the weapon is ranged, it can be used with no penalty at up to its close range hexes away and gains a penalty die for every additional range increment of hexes away the target is. If a target is far enough away that the attack would gain 4 penalty dice from range the attack automatically fails. The weapon does not gain a damage bonus from the character's body stat though some weapons will use it for its x and y calculations.
  - *reach(range)* the number of hexes away the weapon can be used to attack, a range that includes 0 can be used to attack targets that share a hex with the character.
  - *sap* can be used to make the *sap* melee combat action.
  - *size, large* the weapon is designed for character's with a size of greater than 0, the weapon has its max body damage bonus increased by the character's size; additionally characters of size less than zero suffer one penalty die when making an attack skill check with this weapon.
  - *size, small* the weapon is designed for character's with a size of less than 0, the weapon has its base damage and max body damage bonus both reduced by 1; additionally characters of size greater than zero suffer one penalty die when making an attack skill check with this weapon.
  - *thrown* this weapon with the ranged trait still has its damage modified by the character's body stat (following all other rules for the weapon).
  - *trip* can be used to make the *trip* melee combat action.

#### Sample Weapons:
- **Example:** list of keywords
  - Damage: one-handed damage/two-handed damage (max body damage bonus) damage type.
  - Special Rules:
  - Additional Success Uses:

## Adventuring Gear
## Arcane Essence and Essence Items
## Cost of Living
