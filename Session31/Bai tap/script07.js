let todoList = [
  {
    id: 1,
    task: "Hit the gym",
    completed: false,
  },
  {
    id: 2,
    task: "Pay bills",
    completed: true,
  },
  {
    id: 3,
    task: "Meet george",
    completed: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];

// function renderTodo() {
  //     let ul = document.getElementById("myUL")
  //     ul.innerHTML= ""
  
  //     todoList.forEach(function(item) {
    //         if(item.completed=== false){
      //             ul.innerHTML += `<li>${item.task}<span class="close"
      //             onclick = "deleteTodo(${item.id})">x</span></li>`
      //         }else {
        //             ul.innerHTML += `<li class="checked">${item.task}<span class="close"
        //             onclick = "deleteTodo(${item.id})>x</span></li>`
        //         }
        
        //     })
        // }
        // B1: Gắn sự kiện onclick cho nút thêm mới trên giao diện
        function renderTodo() {
            let listTodos = document.getElementById("myUL");
            listTodos.innerHTML = "";
            todoList.forEach(function (item) {
                if (item.completed === false) {
                    listTodos.innerHTML += `<li>${item.task} <span class="close"
                    onclick="deleteTodo(${item.id})">X</span></li>`;
                } else {
                    listTodos.innerHTML += `<li class="checked">${item.task}<span class="close"
                   onclick="deleteTodo(${item.id})">X</span></li>`;
                }
        
            })
        
        }
function addToDo() {    
    // B2: Lựa chọn phần tử input
    let inputElementValue = document.getElementById("myInput").value;

    // B3: Tạo 1 đối tượng task mới từ giá trị của phần tử input
    // {
    //     // id: id phần tử cuối cùng +1
    //     // task: giá trị của ô Input
    //     // completed: false
    // }
    let id = todoList[todoList.length-1].id + 1;
        let todo = {
            id:id,
            task:inputElementValue,
            completed: false,
        }
    // B4: Thêm task mới vào mảng TodoList ban đầu
    todoList.push(todo)
    // B5: Gọi hàm renderTodo để hiển thị lại toàn bộ task bao gồm task đã thêm
    renderTodo()
}

    // B1: Gắn sự kiện onclick cho nút xoá trên giao diện
function deleteTodo(id) {
    // B2: Xoá phần tử có id được truyền vào trong mảng ban đầu
    // todoList = todoList.filter(function(task) {
    //     return item.id !== id;
    // })

    todoList = todoList.filter((task) => task.id !== id)

    // B3: Gọi lại hàm renderTodo để hiển thị lại toàn bộ task, trừ task đã xoá
    renderTodo()
}

renderTodo();


