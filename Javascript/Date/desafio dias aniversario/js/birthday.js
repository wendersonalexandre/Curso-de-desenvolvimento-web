function quantoFaltaPara(m, d) {
     
    const dataAtual = new Date();
    dataAtual.setHours(0);
    dataAtual.setMinutes(0);
    dataAtual.setSeconds(0);
    dataAtual.setMilliseconds(0);

    let anoAtual = dataAtual.getFullYear();
    let dataNiver = new Date(anoAtual,m -1 ,d);
    const dataAtualTs = +dataAtual; // posso usar esse + na frente tambem, ao inves de usar o dataAtual.getTime();
    let dataNiverTS = +dataNiver;

    if(dataNiverTS < dataAtualTs){
        dataNiver.setFullYear(++anoAtual);
        dataNiverTS = +dataNiver
    }

    const UM_dia = 24 * 60 * 60 * 1000;
    const diferenca = dataNiverTS - dataAtualTs;
    
    return parseInt(diferenca / UM_dia);


}
