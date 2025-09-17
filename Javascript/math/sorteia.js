function getRandomNumber(inicio = 0 ,fim = 10 ,integer = true){
    let rand = Math.random() * (fim - inicio + 1) + inicio; 
    return integer ? parseInt(rand): rand;
}
console.log(getRandomNumber(2,3,false));