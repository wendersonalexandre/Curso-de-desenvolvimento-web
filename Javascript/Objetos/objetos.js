const obj = {
    nome: "Daniel Farias",
    idade: 20
}

const obj2 = new Object();

obj2.nome = "Outro nome";

obj2["idade"] = 30;

console.log(obj);
console.log(obj2);

const str = "minha string";
console.log(str.length);

const  str2 = new String("Minha String 2");
console.log(str2);
console.log(str2.length);

const data1 = Date();
console.log(data1);
console.log(typeof data1);

const data2 = new Date();
console.log(data2);
console.log(typeof data2);
