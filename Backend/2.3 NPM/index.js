//var generateName = require("sillyname"); Replaced by "import" below.

// import generateName from "sillyname";
// var sillyname = generateName();
// console.log(`My name is ${sillyname}.`);

//const generateSuperhero = require("superheroes");
import generateSuperhero from "superheroes";
const superhero = generateSuperhero.random();

console.log(`My superheroname is ${superhero}`);
