
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

console.log("------ Uso do toString e toLocaleString-------");

numero = 15;
console.log((0).toString(2));
console.log((1).toString(2));
console.log((2).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));
console.log((5).toString(2));
console.log((6).toString(2));
console.log((7).toString(2));
console.log((8).toString(2));
 
//----------------------------

console.log((15).toString(16));
console.log((16).toString(16));

numero = 123456.789;
console.log(numero.toLocaleString());
console.log(numero.toLocaleString("pt-BR"));