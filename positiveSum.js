// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) continue;
//         sum += arr[i];
//     }
//     return sum
// }

const positiveSum = arr => arr.reduce((a,b) => b > 0 ? a + b : a, 0)

console.log(positiveSum([-1,2,3,4,-5]));