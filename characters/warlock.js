const Pet = require("./pet")
const Character = require("./character");

class Warlock extends Character {
    constructor(name) {
super (name, "warlock", 1, 1.5, 2, 1.5, 150, 150);
this.pets = [];
const imp = new Pet("imp", 1);
this.pets.push(imp);
    }
}

module.exports = Warlock;