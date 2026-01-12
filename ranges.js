import { characters } from "./base.js";

// [] - set
// [^...] - negation

console.log(characters.match(/[abc]+/g));
console.log(characters.match(/[^abc]+/g));

// ranges
// [0-9]
// [a-z]
// [A-Z]
// [a-zA-Z0-9]

console.log(characters.match(/[0-9]+/g));
// console.log(characters.match(/\d+/g));
console.log(characters.match(/([3-5]+|[f-m]+)/g));
console.log(characters.match(/[a-zA-Z0-9]+/g));
// console.log(characters.match(/[\w]+/g));
console.log(characters.match(/[^a-zA-Z0-9]+/g));
// console.log(characters.match(/[\W]+/g));
console.log(characters.match(/[\u00A0-\u00BA]+/g)); // unicode
console.log(characters.match(/\s+/g));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
