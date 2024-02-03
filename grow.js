// function grow(x){
//     return x.reduce((a,b) => a*b, 1)
// }

const grow = (x) => x.reduce((a,b) => a*b, 1)

console.log(grow([4, 1, 1, 1, 4]));