let employees = [];
let n = +prompt("Mời nhập số lượng nhân viên")

if (n <= 0 || isNaN(n)) {
    alert("Số lượng nhân viên không hợp lệ. Thử lại");
} else {
    for (let i=0; i<n; i++) {
        let id = i+1;
        let name = prompt(`Nhập tên nhân viên thứ ${id}`)
        let age = +prompt(`Nhập tuổi nhân viên thứ ${id}`)
        let address = prompt(`Nhập địa chỉ nhân viên thứ ${id}`)

        employees.push({ id, name, age, address });
    }

    let tableBody = document.getElementsByClassName("employee-list")[0];
    let tableContent = "";

    employees.forEach(function (element, index) {
        tableContent += `
        <tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.age}</td>
          <td>${element.address}</td>
        </tr>
      `;
    });

    tableBody.innerHTML = tableContent;
}