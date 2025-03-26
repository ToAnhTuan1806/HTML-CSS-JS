function getTasks() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        return JSON.parse(storedTasks);
    } else {
        return [];
    }
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = getTasks();
    let html = "";
    for (let task of tasks) {
        html += `<li>${task.content} 
                    <button onclick="deleteTask(${task.id})">Xóa</button>
                 </li>`;
    }
    taskList.innerHTML = html;
}

function addTask() {
    let input = document.getElementById("taskInput");
    let newTaskContent = input.value;
    if (newTaskContent === "") {
        alert("Không được để trống");
        return;
    } 
    let tasks = getTasks();
    let newTask = {
        id: new Date().getTime(),
        content: newTaskContent
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
}

function deleteTask(taskId) {
    let tasks = getTasks();
    tasks = tasks.filter(function(task) {
        return task.id !== taskId;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function checkStorage() {
    let tasks = getTasks();
    if (tasks.length === 0) {
        tasks = [
            { id: 1, content: "học JS" },
            { id: 2, content: "học Local Storage" }
        ];
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    renderTasks();
}
checkStorage()