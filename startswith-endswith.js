import { cpfs } from "./base.js";

// ^ - starts with
// $ - ends with
// m - multiline

const cpfRegExp1 = /^(\d{3}\.){2}\d{3}-\d{2}$/g;
const cpf = "194.622.734-95";
console.log(cpf.match(cpfRegExp1));
console.log(cpfs.match(cpfRegExp1));

const cpfRegExp2 = /^(\d{3}\.){2}\d{3}-\d{2}$/gm;
console.log(cpfs.match(cpfRegExp2));
