let x = [10 ];
let y = {n: 10};

function mudaX(x){
    x.push(11);
    console.log("x interno", x);
}

mudaX(x);
console.log("x externo", x);


function mudaY(obj){
    obj.n++;
    console.log("y interno", obj);
}

mudaY(y);
console.log("y externo", y);