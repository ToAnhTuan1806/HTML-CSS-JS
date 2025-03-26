function getItem() {
    return tasks = JSON.parse(tasks)(localStorage.getItem("tasks")) || []
}

function renderTasks() {
    let tasks = getItem()
    let taskList = document.getElementById("taskList")
    let taskItem = ""
    for (let i in tasks) { 
        taskItem += `<li><span>${tasks[i].name}</span>  
            <div>  
            <button onclick="editTask(${i})">Sửa</button>  
            <button onclick="deleteTask(${i})">Xoá</button>  
            </div>  
        </li>`;  
        }  
    taskList.innerHTML =taskItem
}

function addTask() {
    let taskInput = document.getElementById("taskInput")
    let taskName = taskInput.value
    if(taskName){
        let tasks = getItem()
        tasks.push({name:taskName})
        localStorage.setItem("tasks", JSON.stringify(tasks))
        taskInput.value = ""
        renderTasks()
    }else{
        alert("Vui lòng nhập dữ liệu")
    }
}

function editTask(index) {
    let tasks = getItem()
    let newTask = prompt('Chỉnh sửa công việc', tasks[index].name)
    if(newTask){
        tasks[index].name = newTask
        localStorage.setItem("tasks", JSON.stringify(tasks))
        renderTasks()
    }
}

function deleteTask(index) {
    let tasks = getItem()
    if(confirm("Bạn có chắc chắn muốn xoá công việc này không?")){
        tasks.splice(index, 1);  
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks()
    }
}
renderTasks()