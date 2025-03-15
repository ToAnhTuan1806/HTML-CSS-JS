let menu = `
1. Thêm nhân viên mới.
2. Xóa nhân viên theo id.
3. Cập nhật mức lương của nhân viên theo id
4. Tìm kiếm nhân viên theo tên.
5. Thoát
Lựa chọn của bạn
`

let choice;
let employees = [];
while(choice !== 5) {
    choice= +prompt(menu);
    
    switch(choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            findUserByname();
            break;
        case 5:
            console.log("Thoát chương trình thành công!")
            break;
            default:
                console.log("Lựa chọn không hợp lệ thử lại!");
                break;
    }
}

function addEmployee() {
    let name =prompt("Nhập tên");
    let position =prompt("Vị trí");
    let salary = +prompt("Nhập mức lương");
    if(isNaN(salary)) {
        console.log("Mức lương phải là số!");
        return;
    }
    let id = Math.floor(Math.random()*99999+ new Date().getMilliseconds());

    let employee= {
        id:id,
        name:name,
        position:position,
        salary:salary
    }
    employees.push(employee);
    console.log("Thêm nhân viên thành công");
    console.log(`ID: ${employee.id}`);  
    console.log(`Tên: ${employee.name}`);  
    console.log(`Vị trí: ${employee.position}`);  
    console.log(`Mức lương: ${employee.salary}`);  
}

function deleteEmployee() {
    let id = +prompt("Nhập id nhân viên muốn xoá");

    let findIndex = employees.findIndex(item => item.id ===id);
    if(findIndex !== -1) {
        let confirmDelete=confirm("Bạn có muốn xoá hay không ?");
        if(confirmDelete){
            employees.splice(findIndex, 1)
            console.log("Xoá thành công", employees)
        }
    } else {
        console.log("Không tìm thấy nhân viên có id:", id);
        
    }
}

function updateSalary() {
    let id = +prompt("Nhập id nhân viên muốn cập nhật mức lương");

    let findIndex = employees.findIndex(item => item.id ===id);
    if(findIndex !== -1) {
        let newSalary = +prompt("Mời nhập mức lương muốn cập nhật")
        employees[findIndex].salary=newSalary;
        console.log("Cập nhật lương thành công cho nhân viên:", employees[findIndex]);  
    } else {  
        console.log("Không tìm thấy nhân viên có id:", id);  
    }  
} 

function findUserByname () {
    let userName = prompt("Mời nhập tên nhân viên muốn tìm");
    let result = employees.filter(item => item.name.toLowerCase().includes(userName.toLowerCase()));
    if(result.length === 0) {
        console.log("Không tìm thấy nhân viên");
    } else {
        console.log(result);
    }
}
