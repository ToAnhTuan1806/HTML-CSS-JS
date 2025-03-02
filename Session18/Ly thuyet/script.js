// Input 
// -> Cho ng dung nhap vao muc luong (salary)

// Process
// B1: Tao 1 bien salary 

// let salary = Number(prompt("Nhập vào mức lương"));
// if(salary < 5000000) {
//     console.log("Thuế là 0%");
// } else if(salary < 10000000) {
//     console.log(`Thuế là ${salary * (5/100)} VNĐ`);
// } else if(salary < 18000000) {
//     console.log(`Thuế là ${salary * (10/100)} VNĐ`);
// } else if(salary < 32000000) {
//     console.log(`Thuế là ${salary * (15/100)} VNĐ`);
// } else {
//     console.log(`Thuế là ${salary * (20/100)} VNĐ`);
// }


// const statusCode = + prompt("Nhập mã trạng thái HTTP");

// switch(statusCode) {
//     case 200:
//         console.log("Thành công");
//         break;
//     case 201:
//         console.log("Thêm thành công");
//         break;
//     case 400:
//         console.log("Lỗi request");
//         break;
//     case 404:
//         console.log("Không tìm thấy");
//         break;
//     case 500:
//         console.log("Lỗi server");
//         break;
//     default:
//         console.log("Không có mã HTTP này!");
//         break;
// }



let mode = prompt("Nhập trạng thái nhân viên");

let description = 
    (mode === "WORKING" ? "Đang làm việc" :   
    (mode === "ON_LEAVE" ? "Đang nghỉ phép" :   
    (mode === "RESIGNED" ? "Đã nghỉ việc" :   
    (mode === "TERMINATED" ? "Bị sa thải" : "Off"))));

console.log(description); 
