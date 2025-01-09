let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log(arr1.toString()) // converte o array em uma string

console.log(arr2.join('-')) // converte o array em uma string, separando os elementos pelo caracter passado como parametro

let arr3 = arr1.concat(arr2,21,32,43,["ola", "mundo"]) // concatena os arrays passados como parametro e retorna um novo array
console.log(arr3)
