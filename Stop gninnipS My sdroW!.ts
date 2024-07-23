export function spinWords(words: string): string {

    return words.split(' ').map(w => w.length >= 5 ? w.split('').reverse().join("") : w).join(' ');
}

console.log(spinWords("Hey fellow warriors")); 
