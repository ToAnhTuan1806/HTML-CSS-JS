function sumTwoInt(num1, num2) {  
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {  
        return "dữ liệu không hợp lệ";  
    }  
    return num1 + num2;  
}  

let num1 = +(prompt("Nhập số nguyên thứ nhất:"));  
let num2 = +(prompt("Nhập số nguyên thứ hai:"));  
let result = sumTwoInt(num1, num2);  
console.log(result);  