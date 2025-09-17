console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308

console.log(Number.MIN_VALUE);
// 5e-324


let num = 1e309; // número muito grande
console.log(num); // Infinity

console.log(num > Number.MAX_VALUE); 
// true → passou do limite representável


let num2 = Number.MIN_VALUE / 2; 
console.log(num2); // 0 → perdeu a precisão, virou zero
