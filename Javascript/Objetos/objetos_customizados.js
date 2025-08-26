function changeName(name) {
    this.name = name;
    this.updatedAt = new Date();
} 

const task1 = {
    name:"tarefa 1",
    createdAt: new Date(),
    updatedAt:null,
    completed: false,
    changeName 
}

const task2 = {
    name:"tarefa 2",
    createdAt: new Date(),
    updatedAt:null,
    completed: false,
    changeName
}

task1.name = "tarefa 1 - atualizada";
task1.updatedAt = new Date();
task1.changeName("nova tarefa 1");
task2.changeName("nova tarefa 2");


//console.log(task1);
console.log(task2);


