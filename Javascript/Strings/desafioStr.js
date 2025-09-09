let tel1 = "91234-2345";
let tel2 = "1234-2345";

function mascararTel(numero){
    let hifemPosisition =  numero.indexOf('-');
    let numbeIni = numero.slice(0, hifemPosisition );
    let numebeEnd = numero.slice(hifemPosisition + 1);
    console.log(numbeIni);
    console.log(numebeEnd);
    let twoNumbersEnd = numebeEnd.slice(-2);
    console.log(twoNumbersEnd);
    return `${numbeIni[0].padEnd(numbeIni.length, '*')}${twoNumbersEnd}-${twoNumbersEnd.padStart(numbeEnd.length, '*')}`;
    
}

console.log(mascararTel(tel1));
console.log(mascararTel(tel2)); 
