import { html2 } from "./base.js";

// \<number> - refers to group
// (?:...) - non-capturing group

const regExp1 = /<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g; // \1 refers to group 1 (\w+)
console.log(html2.match(regExp1));

const regExp2 = /(<(\w+)(?:[\s\S]*?>))([\s\S]*?)(<\/\2>)/g;
console.log(html2.replace(regExp2, "$1HAHA$3HAHA$4"));
