// Desafio proposto pelo professor 
// Retirar os números repetidos do array

const numeros = [1,2,3,1,2,3,4,5,4,5];
const numerosUnicos = numeros.reduce(function(numerosUnicos,numeroAtual){ // reduce é uma função que vai reduzir o array a um único valor e vai retornar esse valor para a variável numerosUnicos

    if(numerosUnicos.indexOf(numeroAtual) < 0){ // se o número não estiver no array numerosUnicos
        numerosUnicos.push(numeroAtual); // adicione o número ao array numerosUnicos
    } 
    return numerosUnicos; // retorne o array numerosUnicos
},[])

console.log(numerosUnicos); // resultado do desafio