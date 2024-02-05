// function howMuchILoveYou(nbPetals) {
//     let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
//     return arr[(nbPetals - 1) % 6]
// }

const howMuchILoveYou = _ => ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(_ - 1) % 6]

console.log(howMuchILoveYou(7));
