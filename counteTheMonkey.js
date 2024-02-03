// function monkeyCount(n) {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }

const monkeyCount = n => Array(n).fill().map((_,i) => i+1) 

console.log(monkeyCount(10));