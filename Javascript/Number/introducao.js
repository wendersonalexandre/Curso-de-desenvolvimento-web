
console.log("------ Uso do toFixed -----")

let numero = 1234567.89001616161;

console.log(numero.toFixed(10));
console.log(typeof numero.toFixed(3));

console.log( "------ Uso do toPrecision -----");

console.log(numero.toPrecision(7));
console.log(typeof numero.toPrecision(7));
console.log((123).toPrecision(6));

console.log( "------ Uso do toExponential -----");

console.log(numero.toExponential(9));
console.log(typeof numero.toExponential(9));

