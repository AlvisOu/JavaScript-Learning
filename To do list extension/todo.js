const inputBtn = document.getElementById('input-btn');
const inputTask = document.getElementById('input-task');
const inputDiv = document.getElementById('input-field');
const deleteBtn = document.getElementsByClassName('delete-btn')

const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks") );

let taskArray = [];
if (tasksFromLocalStorage){
    taskArray = tasksFromLocalStorage;
}

renderTasks();

inputBtn.addEventListener('click', function() {
    if(inputTask.value === ""){
        alert("Please enter a task.")
    }
    else{
        taskArray.push(inputTask.value);
        inputTask.value = "";
        localStorage.setItem("tasks", JSON.stringify(taskArray) );
        renderTasks();
    }
})

function listenForDelete(){
    for (let i=0; i<taskArray.length;i++){
        deleteBtn[i].addEventListener('click', function(e){
            let target = e.target.closest('.delete-btn');
            
            for (let i=0;i<taskArray.length;i++){
                if(taskArray[i] === target.parentElement.firstElementChild.innerText){
                    
                    taskArray.splice(i, 1);
                }
            }
            localStorage.setItem("tasks", JSON.stringify(taskArray) );
            renderTasks();
        })
    }
    
}

function renderTasks(){
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    for (let i=0;i<taskArray.length;i++){
        
        let task = document.createElement('div');
        task.classList.add('task');

        let list = document.createElement('li');
        list.innerText = `${taskArray[i]}`;
        task.appendChild(list);

        let completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class="fa-solid fa-check"><i>';
        completeButton.classList.add('complete-btn');
        task.appendChild(completeButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.classList.add('delete-btn');
        task.appendChild(deleteButton);
        
        taskContainer.appendChild(task);
    }
    inputDiv.parentElement.appendChild(taskContainer);
    inputDiv.nextElementSibling.remove();
    listenForDelete();
}
