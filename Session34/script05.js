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
    let index = 1;
    for (let employee of employees) {
        let row = "<tr><td>" + index + "</td><td>" + employee.name + "</td><td>" + employee.position + "</td></tr>";
        tableBody.innerHTML += row;
        index++;
    }
}

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let employees = getEmployees();
    employees.push({ name: name, position: position });
    localStorage.setItem("employees", JSON.stringify(employees));
    renderEmployees();
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
}
window.onload = function () {
    renderEmployees();
};