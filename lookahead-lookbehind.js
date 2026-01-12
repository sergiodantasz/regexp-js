import { logs } from "./base.js";

// positive lookahead
const regExp1 = /.+(?=[^in]active)/gim;
console.log(logs.match(regExp1));

// negative lookahead
const regExp2 = /^(?!.+inactive).+$/gim;
console.log(logs.match(regExp2));

// positive lookbehind
const regExp3 = /(?<=ONLINE\s+).*/gim;
console.log(logs.match(regExp3));

// negative lookbehind
const regExp4 = /^.+(?<!ONLINE.+)$/gim;
console.log(logs.match(regExp4));
