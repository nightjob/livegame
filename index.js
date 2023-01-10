const config = require("./config/classNames");

let character;

function chooseClass(classType) {
  if (classType === config.classNames.MageClassName) {
    character = new Mage("Mage");
  } else if (classType === config.classNames.PaladinClassName) {
    character = new Paladin("Paladin");
  } else if (classType === config.classNames.WarlockClassName) {
    character = new Warlock("Warlock");
  }

  console.log("Picked ", character); //revisit);
}

const mageButton = document.getElementById("mage");
const paladinButton = document.getElementById("paladin");
const warlockButton = document.getElementById("warlock");

mageButton.addEventListener("click", function () {
  chooseClass("mage");
});

paladinButton.addEventListener("click", function () {
  chooseClass("paladin");
});

warlockButton.addEventListener("click", function () {
  chooseClass("warlock");
});

const playButton = document.getElementById("play-button");
const video = document.getElementById("video");

playButton.addEventListener("click", function () {
  video.style.display = "block";
  video.play();
});
