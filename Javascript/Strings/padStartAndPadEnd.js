let str = '7';

console.log(str) // não altera a string original
console.log(str.padStart(10, '0')); // 000000007
console.log(str.padEnd(10, '0'));   // 700000000

