function fn(cb){
    console.log('executar acão de callback')
    console.log(typeof cb)
    cb()
}

function callback(){
    console.log("Função passada por parametro")
}

fn(callback)

const obj = {
    callback:callback
}
obj.callback()

function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}
const fucao2 = fn2(10)
const multi = fucao2(2)
console.log(multi)

function fn3(){
    return function(){
        console.log('Função retornada por parametro')
    }
}
fn3.count = 0

const funcao3 = fn3()
funcao3()
console.log(fn3.count)