let employeePage = 3;
let currentPage = 1

function getEmployees() {
    let storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
        return JSON.parse(storedEmployees);
    } else {
        return [];
    }
}

function renderEmployees() {
    let employees = getEmployees();
    let tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = "";

    let start =(currentPage-1)* employeePage
    let end = start+employeePage;
    let paginationEmployees = employees.slice(start, end)
    let count = 0;
    for(let employee of paginationEmployees) {
        let row = "<tr>" +
            "<td>" + (start + count + 1) + "</td>" +
            "<td>" + employee.name + "</td>" +
            "<td>" + employee.position + "</td>" +
        "</tr>";
        tableBody.innerHTML += row;
        count++;
    }
    renderPagination();
}

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    if (name ==="" || position ==="") {
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    let employees = getEmployees();
    employees.push({ name: name, position: position });
    localStorage.setItem("employees", JSON.stringify(employees));
    
    currentPage = Math.ceil(employees.length/employeePage)
    renderPagination()
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
}
window.onload = function () {
    renderEmployees();
};
// hiển thị trang thái nút phân trang
function renderPagination(){
    let employees = getEmployees()
    let totalPages = Math.ceil(employees.length/employeePage)
    let prevBtn = document.getElementById("prevBtn")
    let nextBtn = document.getElementById("nextBtn")
    // vô hiệu hoá nút nếu ở trnag đầu
    if(currentPage===1){
        prevBtn.disabled = true
    }else {
        prevBtn.disabled = false
    }
    // vô hiệu hoá nút nếu ở trang cuối
    if(currentPage===totalPages){
        nextBtn.disabled = true
    }else {
        nextBtn.disabled = false
    }
    // cập nhật class cho nút hiện tại
    let pageButton = document.querySelectorAll(".page-btn")
    pageButton.forEach(function(button){
        if(parseInt(button.innerText)===currentPage){
            button.classList.add("active")
        }else {
            button.classList.remove("active")
        }
    })
}
function changePage(page) {
    let employees = getEmployees()
    let totalPages = Math.ceil(employees.length/employeePage)

    if(page==="prev"){
        if(currentPage>1){
            currentPage--
        }
    }else if(page==="next"){
        if(currentPage<totalPages){
            currentPage++
        }
    }else if(Number.isInteger(page) && page>=1 && page<=totalPages) {
        currentPage=page;
    }
    renderEmployees();
}