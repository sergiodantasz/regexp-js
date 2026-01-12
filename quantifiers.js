import { text1, files } from "./base.js";

// {m,n} - m is min, n is max
// * - 0..n ({0,})
// + - 1..n ({1,})
// ? - 0..1 ({0,1})

// \ - escape character
// . - any character (except new line character)

const regExp1 = /Jo+ão+/gi;
console.log(text1.match(regExp1));

// const regExp2 = /\.(jpg|jpeg)/gi;
// const regExp2 = /\.jpe{0,1}g/gi;
const regExp2 = /\.jpe?g/gi;
for (const file of files) {
  console.log(file, file.match(regExp2));
}
