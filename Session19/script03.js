let cash = Number(prompt("Nhập số tiền"));  
let type = prompt("Nhập loại chuyển đổi (1: VND sang USD, 2: USD sang VND)");  

let result;  

if (type === "1") {   
    result = cash / 23000;  
    console.log(`${cash.toLocaleString("vi-VN")} VND = ${result.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);  
} else if (type === "2") {  
    result = cash * 23000;  
    console.log(`${cash.toLocaleString("en-US", { style: "currency", currency: "USD" })} = ${result.toLocaleString("vi-VN")} VND`);  
} else {  
    console.log("Loại chuyển đổi không hợp lệ");  
}