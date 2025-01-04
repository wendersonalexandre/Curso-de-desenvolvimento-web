let arr =[10, 11, 3, 4 , 61, 45, 11]

console.log(arr.lastIndexOf(61)) // Vai me retornar 4, pois o valor 61 esta na posição 4 do array
console.log(arr.lastIndexOf(632)) // Vai me retornar -1, pois o valor não existe no array


console.log(arr.includes(3)) // me retorna true, pois o valor 3 existe no array
console.log(arr.includes(123)) // tambem vai me retornar false, pois o valor não existe no array

 console.log(arr.find(function(el){
    return el > 10
 }))

 console.log(arr.findIndex(function(el){
    return el > 10
 }))