// function sumArray(array) {
//     if (array == null || array.length < 2) return 0

//     array = array.sort(function (a, b) { return a - b; });
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//         total += array[i];
//     }
//     return total;
// }

const sumArray = (arr) => arr ? arr.sort((a,b) => a-b).slice(1,-1).reduce((acc,val) => acc + val, 0) : 0

console.log(sumArray([1, 2]));