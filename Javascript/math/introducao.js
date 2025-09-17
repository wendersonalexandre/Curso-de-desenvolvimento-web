console.log(Math.min(1,2,3,4,5,6,3444)) // Retorna o menor número encontrado.

console.log(Math.max(1,2,3,4,5,6,3444)) // Retorna o maior número encontrado.


let arr = [0,2,3,4,5,6,3444];
let maior = Math.max( ...arr);
let menor = Math.min(...arr);
console.log(`O maior  número é ${maior}`);
console.log(`O menoor número é ${menor}`);

//=============================================

console.log(Math.round(45.9)); // Arredonda pra cima,se for mais de 5 ou para baixo, se for a baixo de 5


console.log(Math.floor(45.7)); // Arredonda sempre para baixo.

console.log(Math.ceil(45.3)) // Arredonda sempre para cima.


//==================================================

console.log(Math.pow(2,3)) // 2*2*2 = 8
console.log( 2 ** 3);

console.log(Math.sqrt(100)); // raiz quadrada
console.log(Math.cbrt(8)) // Raiz cubica


console.log(Math.ceil(Math.random() * 100 + 1)); 