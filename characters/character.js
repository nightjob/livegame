const config = require("../config/classNames")

class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.spells = [];
        this.weapons = [];
        this.pets = [];
        this.activePet = null;
    }

    levelUp() {
        this.level = this.level + 1;
        if(this.className === config.className.MageClassName) {
            console.log("Your", this.className, "has leveled up!", this.className, "is now", this.level);
            this.magic = this.magic + 1;
            this.speed = this.speed + 1;
            this.health = this.health + 10;
            this.mana = this.mana +20;
        } else if(this.className === config.className.PaladinClassName) {
            console.log("Your", this.className, "has leveled up!", this.className, "is now", this.level);
            this.attack = this.attack + 1;
            this.magic = this.magic + 1;
            this.health = this.health +20;
            this.mana = this.mana +10;
        } else if(this.className === config.className.WarlockClassName) {
            console.log("Your", this.className, "has leveled up!", this.className, "is now", this.level);
            this.magic = this.magic + .5;
            this.defense = this.defense + 1;
            this.speed = this.speed +.5;
            this.health = this.health + 15;
            this.mana = this.mana + 15;
        } 
    }

    getDamage(spellName) {
        if(spellName) {
            const spell = this.spells.find(s => s.name === spellName);
            if(!spell) return 0;
            if(this.mana < spell.mana) {
                console.log("not enough mana");
                return 0;
            }

            this.mana -= spell.mana;
            return spell.power + this.magic + this.speed;
        } else if(this.activePet) {
            const petDamage = this.activePet.damage;
            return petDamage + this.magic + this.speed;
        } else if(this.equippedWeapon) {
            const weaponDamage = this.equippedWeapon.damage;
            return this.attack + weaponDamage;
        }
    }

    summonPet(petName) {
        for(let i = 0; i < this.pets.length; i++) {
            const pet = this.pets[i];
            if(pet.name === petName) {
                this.activePet = pet;
            }
        }
    }

    addWeapon(weapon) {
        for(let i = 0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i];
            if(weapon.name === weaponName) {
                this.equippedWeapon = weapon;
            }
        }
    }
}

module.exports = Character;