let arr =[10, 11, 3, 4 , 61, 45, 11]

console.log(arr.indexOf(3)) // Vai me retornar 2, pois o valor 3 esta na posição 2 do array

console.log(arr.lastIndexOf(61)) // Vai me retornar 4, pois o valor 61 esta na posição 4 do array
console.log(arr.lastIndexOf(632)) // Vai me retornar -1, pois o valor não existe no array


console.log(arr.includes(3)) // me retorna true, pois o valor 3 existe no array
console.log(arr.includes(123)) // tambem vai me retornar false, pois o valor não existe no array

 console.log(arr.find(function(el){  // Vai me retornar o primeiro valor que for maior que 10
    return el > 10
 }))

 console.log(arr.findIndex(function(el){ // Vai me retornar a posição do primeiro valor que for maior que 10
    return el > 10
 }))