const Character = require("./character")
const fireball = require("../spells/fireball")
const config = require('../config/classNames')

class Mage extends Character {
    constructor(name) {
        super(name, config.classNames.MageClassName, 1, 2, 1, 2, 100, 200);
        this.spells.push(fireball);
    }
}
console.log(config.classNames.MageClassName)
module.exports = Mage;