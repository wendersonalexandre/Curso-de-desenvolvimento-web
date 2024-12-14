/*
IMC

Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2 
*/

function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error('[ERRO] peso ou altura invalido')
    }
    return peso / (altura * altura)
}

function classificaImc(imc){
    if(imc < 16.9){
        return ' Muito a baixo do peso';
    } else if(imc < 18.4){
        return 'abaixo do peso';

    } else if(imc < 24.9){
        return ' normal';

    }else if(imc < 29.9){
        return 'acima do peso';

    } else if (imc <= 34.9){
        return 'obesidade';
    }

}

let imc = calcularIMC(80, 1.82)
console.log(imc)
console.log(classificaImc(imc))