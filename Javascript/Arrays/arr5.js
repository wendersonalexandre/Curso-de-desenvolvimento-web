let arr = [1,3,5,7,9];
let teste = arr.push(11,13,true, 'olá mundo') // adiciona um elemento ao final do array
console.log(teste)
console.log(arr)

 let ultimointem = arr.pop() // apaga o ultimo elemento do array
// let ultimointem = arr [arr.length - 1]
console.log(ultimointem)
console.log(arr) 

let primeiroitem = arr.shift() // apaga o primeiro elemento do array
console.log(primeiroitem)
console.log(arr)

teste = arr.unshift(100,200); // adiciona um ou mais elementos ao inicio do array
console.log(teste) 
console.log(arr)

let arr2 = arr.slice(1,4);  // cria um novo array com elementos do array original entre os indices 1 e 4
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2); // remove elementos do array original a partir do indice desejado  e retorna os elementos removidos
console.log(arr)
console.log(arr3)