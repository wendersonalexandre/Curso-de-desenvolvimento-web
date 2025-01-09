let arr1 = [1, 2, 3, 4];
arr1.reverse() // vai inverter a ordem dos elementos do array
// console.log(arr1); // resultado do metodo reverse

let j = 0;
let soma = arr1.reduce(function(acumulador,valorAtual, i, _arr){ // reduce é uma função que vai reduzir o array a um único valor e vai retornar esse valor para a variável soma
    console.log('i: ', i); 
    console.log('j: ', j++);   
    console.log(_arr); // array original
    return acumulador + valorAtual;
},0)
console.log(soma); // resultado da soma dos elementos do array
console.log(arr1); // array original não é alterado

const nomes = ['Maria', 'João', 'José', 'Antônio', 'Ana', 'Wenderson', 'Werleson', 'Wesllayne', 'Weslley'];
let nomesPorOrdem = nomes.reduce(function(nomes,nomeAtual){

    /*
    1-
    nome = {}
    nomeAtual = "Maria" -> primeiroLetra = "M"
    return {M = 1}

    2-
    nomes = {M = 1}
    nomeAtual = "João" -> primeiroLetra = "J"
    return {M = 1, J = 1}

    3- 
    nomes = {M = 1, J = 1}
    nomeAtual = "José" -> primeiroLetra = "J"
    return {M = 1, J = 2} 
     */

    let primeriaLetra = nomeAtual[0];
    if(nomes[primeriaLetra]){
        nomes[primeriaLetra]++;
    } else{
        nomes[primeriaLetra] = 1;
    }; return nomes;

},{})

console.log(nomesPorOrdem); // resultado do reduce






