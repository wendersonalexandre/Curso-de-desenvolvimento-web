let arr = [1,3,5,7,9];
let teste = arr.push(11,13,true, 'olá mundo')
console.log(teste)
console.log(arr)

 let ultimointem = arr.pop()
// let ultimointem = arr [arr.length - 1]
console.log(ultimointem)
console.log(arr) 

let primeiroitem = arr.shift()
console.log(primeiroitem)
console.log(arr)

teste = arr.unshift(100,200);
console.log(teste)
console.log(arr)

let arr2 = arr.slice(1,4);
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2);
console.log(arr)
console.log(arr3)