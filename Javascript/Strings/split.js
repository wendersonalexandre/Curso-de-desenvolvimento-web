function formatarNome(nomeCompleto){
    let nomeAssArray = nomeCompleto.split("");
    if(nomeAssArray.length === 1){
        return nomeCompleto;
    } 
    let primeiroNome = nomeAssArray.shift();
    return nomeAssArray.join("") + ",  " + primeiroNome;
}
console.log(formatarNome("   Wenderson  "));
console.log(formatarNome("   Wenderson Alexandre   ")); 
console.log(formatarNome("   Wenderson Alexandre Silva  ")); 