const teste = function (cb){
    console.log("função teste")
    console.log(cb)
    if (typeof cb === "function"){
        cb (30)
    }
}

const fn = function(param){
    console.log("Função anonima de callback")
    console.log(param)
}

teste(fn)