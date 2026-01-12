import { html1 } from "./base.js";

const regExp1 = /<.+>.*<\/.+>/gi; // greedy
console.log(html1.match(regExp1));

const regExp2 = /<.+?>.*?<\/.+?>/gi; // non-greedy
console.log(html1.match(regExp2));
