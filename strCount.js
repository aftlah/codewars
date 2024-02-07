// function strCount(str, letter) {
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             arr.push(str[i])
//         }
//     }
//     return arr.length
// }

// const strCount = (str, letter) => [...Array.from(str).filter(x => x== letter)].length;

// const strCount = (str, letter) => Array.from(str).filter(x => x == letter).length
const strCount = (str, letter) => str.split(letter).length-1

console.log(strCount("Hello", "l"));