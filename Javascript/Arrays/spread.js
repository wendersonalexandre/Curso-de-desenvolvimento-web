const arr = [1,2,3];
const arr2 = [4,5,6];


function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

sum (1,2,3); 
sum (arr);
sum ([1,2,3]);

sum (...[1,2,3]);
sum (...arr)

arr.push(arr2)
console.log(arr)