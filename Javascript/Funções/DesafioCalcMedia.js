/*
Pode receber um ou mais valores númericos
Deve retornar um único número
Deve gerar um erro se receber um parametro não número
Deve retornar zero caso não receba nenhum parametro
 */

(function(){
    function calcularMedia(){
        let total = 0 
        let qtd = arguments.length
        for(let i = 0; i < qtd;i++){
            if(typeof arguments[i] !== "number"){
                throw Error ('Only numbers')
           }
           total += arguments[i]
        }
        return total / qtd
    }
    let media  = calcularMedia( 4,6,10)
    console.log(media)
})()