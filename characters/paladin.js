const Character = require("./character")
const lightHeal = require("../spells/lightHeal")
const stick = require("../weapons/stick")

class Paladin extends Character {
    constructor(name) {
            super(name, "paladin", 2, 2, 1, 1, 200, 100);
            this.spells.push(lightHeal);
            this.weapons.push(stick);
    }
}

module.exports = Paladin;