// function digitize(n) {
//     return String(n).split('').reverse().map(Number)
// }

// const digitize = n => String(n).split('').reverse().map(Number);

const digitize = n => [...String(n)].reverse().map(Number);

console.log(digitize(35231))