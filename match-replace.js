import { text1 } from "./base.js";

const regExp1 = /João|Maria/gi;

console.log(text1.match(regExp1));

// if without the 'g' flag, only the first occurrence is replaced
console.log(text1.replace(regExp1, "SÉRGIO"));
// $<number> refers to the group
console.log(text1.replace(/(João|Maria) (trouxe)/gi, "$1 É TOP '$2'"));
console.log(
  text1.replace(/(João|Maria)/gi, (substring) => "###" + substring + "###")
);
