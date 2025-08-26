function task(nameTask){
    let nameAt = nameTask;
    this.createdAt = new Date();
    this.updatedAt = null;
    this.changeName = (newName) =>{
        nameAt = newName;
        this.updatedAt = new Date();
    }

    this.getName = function(){
        return nameAt;
    };
}

const task1 = new task("minha tarefa");
task1.changeName("tarefa alterada");

const task2 = new task("outra tarefa");

console.log(task1);
console.log(task2);
console.log(task1.getName());
console.log(task2.getName());