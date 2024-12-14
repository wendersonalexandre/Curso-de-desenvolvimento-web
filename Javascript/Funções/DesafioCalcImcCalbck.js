function calcularIMC(peso, altura,callback){
    if(peso === undefined || altura === undefined){
        throw Error('[ERRO] peso ou altura invalido')
    }
    let imc = peso/ (altura * altura)
    if (typeof callback === "function"){
        return callback(imc)
    }
    return imc
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
let imc2 = calcularIMC(80, 1.82,classificaImc)
console.log(imc)
console.log(imc2)