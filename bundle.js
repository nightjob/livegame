(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const config = {
    classNames: {
    MageClassName: "Mage",
    PaladinClassName: "Paladin",
    WarlockClassName: "Warlock"
},
gameName: "DCC RPRug"
}

module.exports = config;
},{}],2:[function(require,module,exports){
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

},{"./config/classNames":1}]},{},[2]);
