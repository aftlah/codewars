export function xo(str: string): boolean {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(xo('xxxm')) // true;
