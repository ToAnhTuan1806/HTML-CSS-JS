const courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiểu Ci Ốt Ốt',
    },
];

function saveToLocalStorage() {
    localStorage.setItem('courses', JSON.stringify(courses));
}

function loadFromLocalStorage() {
    let data = localStorage.getItem('courses');
    if(data){
        return JSON.parse(data);
    } else {
        return [];
    }
}

function displayTasks() {
    let tableBody = document.querySelector('#taskTable tbody');
    tableBody.innerHTML = '';
    let tasks = loadFromLocalStorage();
    let rowsHTML = '';

    for (let index in tasks) {
        let course = tasks[index];
        rowsHTML += `
            <tr>
                <td>${parseInt(index) + 1}</td>
                <td>${course.content}</td>
                <td>${course.dueDate}</td>
                <td>${course.status}</td>
                <td>${course.assignedTo}</td>
                <td>
                    <button onclick="editTask(${course.id})">Sửa</button>
                    <button onclick="deleteTask(${course.id})">Xóa</button>
                </td>
            </tr>
        `;
    }
    tableBody.innerHTML = rowsHTML;
}

function addTask() {
    let content = document.getElementById('content').value;
    let dueDate = document.getElementById('dueDate').value;
    let status = document.getElementById('status').value;
    let assignedTo = document.getElementById('assignedTo').value;

    if (content && dueDate && assignedTo) {
        let newId;

        if (courses.length > 0) {
            newId = courses[courses.length - 1].id + 1;
        } else {
            newId = 1;
        }

        let newTask = {
            id: newId,
            content: content,
            dueDate: dueDate,
            status: status,
            assignedTo: assignedTo
        };

        courses.push(newTask);
        saveToLocalStorage();
        displayTasks();
        clearInputs();
    } else {
        alert("Please fill all fields");
    }
}

function editTask(id) {
    let task = courses.find(function(course) {
        return course.id === id;
    });
    if (task) {
        document.getElementById('content').value = task.content;
        document.getElementById('dueDate').value = task.dueDate;
        document.getElementById('status').value = task.status;
        document.getElementById('assignedTo').value = task.assignedTo;
        document.getElementById('submit').onclick = function () {
            updateTask(id);
        };
    }
}

function updateTask(id) {
    let task = courses.find(function(course) {
        return course.id === id;
    });
    if (task) {
        task.content = document.getElementById('content').value;
        task.dueDate = document.getElementById('dueDate').value;
        task.status = document.getElementById('status').value;
        task.assignedTo = document.getElementById('assignedTo').value;
        saveToLocalStorage();
        displayTasks();
        clearInputs();
        document.getElementById('submit').onclick = addTask;
    }
}

function deleteTask(id) {
    let index = courses.findIndex(function(course) {
        return course.id === id;
    });
    if (index > -1) {
        courses.splice(index, 1);
        saveToLocalStorage();
        displayTasks();
    }
}

function clearInputs() {
    document.getElementById('content').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('status').value = '';
    document.getElementById('assignedTo').value = '';
}

document.getElementById('submit').onclick = addTask;
window.onload = function () {
    displayTasks();
};
