const Character = require("./character")
const fireball = require("../spells/fireball")

class Mage extends Character {
    constructor(name) {
        super(name, "mage", 1, 2, 1, 2, 100, 200);
        this.spells.push(fireball);
    }
}

module.exports = Mage;