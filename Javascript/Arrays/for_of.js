const arr = [1,2,3]
const obj ={
    nome:'Maria',
    idade:'23',
    email:'mariatarara@gmail.com'
};

for(let prop in obj){
    console.log(obj[prop])
}

for(n of arr ){
    console.log(n)
}