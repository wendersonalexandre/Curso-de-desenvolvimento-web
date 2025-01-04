const arr = [1,5,10,'olá',true]

// O .every() vai verificar se todos os elementos do array atendem a uma condição e se atender ele retorna TRUE e caso não atenda retorna FALSE.

let soNumeros = arr.every(function(el){ // Também posso usar o .some() mas, tem uma diferença: Caso só UM elemento seja verdadeiro ele irá retornar TRUE.
    return typeof el === "number"
})

const arr1 = arr.filter(function(el,i,_arr){ // O .filter() vai criar um novo array contendo os somente os elementos que passam na condição.
    
    return typeof el === "number"
})

arr.forEach(function(el,i,_arr){ // Usado para executar uma função para cada elemento de um array mas, não retorna nenhum valor.
    console.log(i,':', el)
})

console.log(arr)
console.log(arr1)


