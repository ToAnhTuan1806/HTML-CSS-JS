let inputTask = document.getElementById('inputTask')
let addButton = document.getElementById('btn-add')
let listTask = document.getElementById('myList')

addButton.onclick = function () {
    let contentTask = inputTask.value;
    if (contentTask==="") {
        alert("Nhiệm vụ không được để trống")
        return;
    }
    listTask.innerHTML += `<li>${contentTask} <button class="btn-delete">X</button></li>`;
    inputTask.value = "";
    deleteButton()
};
function deleteButton() {
    let deleteBtns = document.querySelectorAll(".btn-delete"); 
    deleteBtns.forEach(function(button) {
        button.onclick=function () {
            let confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này không");
            if(confirmDelete) {
                button.parentElement.remove(); 
            }
        }
    });
}
deleteButton();
