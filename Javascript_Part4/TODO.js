let todo = [];

let req = prompt("Enter your Request");

while(true){
    if(req == "exit"){
        console.log("Exit APP");
        break;
    }

    if(req == "list"){
        console.log("---------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------------");
    } else if(req == "add"){
        let task = prompt("Enter Your Task ");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let idx = prompt("Please Enter the task index");
        todo.splice(idx, 1);
        console.log("task delete");
    }
    else{
        console.log("Wrong request")
    }
    req = prompt("please Enter yor request");
}