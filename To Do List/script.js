document.addEventListener('DOMContentLoaded',()=>{                      //loading things from local storage
const todoInput=document.getElementById("todo-input");
const addTaskButton= document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

//for adding tasks need an array so
let tasks=JSON.parse(localStorage.getItem('tasks')) || [];          //tasks same as in setitem
            //JSON parse used to convert json string to javascript object

tasks.forEach(task =>renderTask(task));

addTaskButton.addEventListener('click',function(){
    const taskText=todoInput.value.trim()                   //getting access to value of input list item
    if(taskText==-"")return;
    const newTask={
        id: Date.now(),
        text:taskText,
        completed:false
    }
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value=""; //clear input
    console.log(tasks);
    
});
                //reading from local storage
function renderTask(task){
    // console.log(task.text);
    const li=document.createElement('li');
    li.setAttribute('data-id',task.id);
    if(task.completed) li.classList.add("completed");   
    li.innerHTML= `
    <span>${task.text}</span>
    <button>delete</button>`;

    li.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON') return;
        task.completed=!task.completed;             // ! will reverse whatever will be the status of task completed
        li.classList.toggle('completed');
        saveTasks();
    });

    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation()             //prevent toggle from firing
        tasks=tasks.filter(t => t.id!==task.id);
        li.remove();
        saveTasks();
    })


    todoList.appendChild(li); 
    
}


function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));                //for storing in local storage
}
})

