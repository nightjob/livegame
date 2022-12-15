In this game, you can choose a class, level up, cast spells, and attack mobs until you die.
#
# Game Rules

`Game logic dictates a character's damage and is calculated using this algorithm:`

- If a character has an activePet, we take the activePet's damage as starting value, and add it to the character's magic damage.
- If a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
- If a character has neither an activePet, nor a spell, we take their weapon's damage, and add it to the character's attack damage.

All classes start at level 1
These are the base requirements and stats for each character:

*Name
*Class Name
*Level
*Attack
*Magic
*Defense
*Speed
*Health
*Mana

The following are optional for characters:

*Spells
*Weapons
*Pets

In the game, 10 is a very strong stat, the max to start with. 1 is the lowest. These are the boundaries that will be defined.

Health and mana are diffrent. They have no bounds.
#
# Mage

    - Low Health, High Mana
    - Low Attack, High Magic
    - Low Defense, High Speed

    - Starts with the Fireball spell
#
# Paladin

    - High Health, Low Mana
    - High Attack, High Magic
    - Low Defense, Low Speed

    - Starts with Sitck and Light Heal spell
#
# Warlock

    - Medium Health, Medium Mana
    - Low Attack, Medium Magic
    - High Defense, Medium Speed

    - Starts with Imp Pet, can summon pets
#
# Pet Logic

    - A character can have an array of pets, but can only have a single active pet. They have to summon the pet.

    ## Day 1 of game

Level up a character, and increase its stats.