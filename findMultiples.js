// function findMultiples(integer, limit) {
//         let arr = []

//         for (let i = integer; i <= limit; i++) {
//             if (i % integer === 0)
//             arr.push(i)

//         }
//         return arr
// }
// const findMultiples = (_, $) => [...Array($/_).keys()].map(x => _*(x+1))

const findMultiples = ($, _) => Array.from({length: _/$}).map((_,i) => $*(i+1))


    console.log(findMultiples(5, 7))