// O isNaN verifica se o valor não é um número.

console.log(isNaN(123));       // false → é número
console.log(isNaN("123"));     // false → string mas dá pra virar número
console.log(isNaN("abc"));     // true  → não dá pra virar número
console.log(isNaN(NaN));       // true  → NaN é "Not a Number"


let idade = "vinte"; 

if (isNaN(idade)) {
  console.log("Idade inválida!");
} else {
  console.log("Idade válida!");
}


let valor = "50a"; 
let numero = Number(valor);

if (isNaN(numero)) {
  console.log("Erro: valor não é número");
} else {
  console.log(numero * 2);
}
