export function SeriesSum(n: number): string {

    // Cara 1
    // let sum = 0;
    // for (let i = 0; i < n; i++) {
    //     sum += 1 / (1 + i * 3);
    // }
    // return sum.toFixed(2);

    // Cara 2
    return [...Array(n).keys()].map(k => 1 / (1 + k * 3)).reduce((a, b) => a + b, 0).toFixed(2);
}

console.log(SeriesSum(1))
