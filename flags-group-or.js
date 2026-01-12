import { text1 } from "./base.js";

// g - global (find all occurrences)
// i - case insensitive

const regExp1 = /João/g;
const regExp2 = /jOãO/i;

console.log(regExp1.test(text1));
console.log(regExp2.test(text1));

// () - group

const regExp3 = /(Teve) (5 filhos)/;
console.log(regExp3.exec(text1));

// nested groups
// 1   2   3      4    5   6
// (...(...(...)))(...)(...(...))

// | - or

const regExp4 = /(maria|joão|luiz|sérgio)(, hoje sua esposa)/i;
console.log(regExp4.exec(text1));
