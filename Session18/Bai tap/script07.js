let a = + prompt("Mời bạn nhập vào số a");
let b = + prompt("Mời bạn nhập vào số b");

let operation = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");

let result;  

switch (operation) {  
    case '+':  
        result = a + b;  
        break;  
    case '-':  
        result = a - b;  
        break;  
    case '*':  
        result = a * b;  
        break;  
    case '/':  
        if (b !== 0) {  
            result = a / b;  
        } else {  
            result = "Lỗi: Không thể chia cho 0!";  
        }  
        break;  
    default:  
        result = "Phép toán không hợp lệ!";  
        break;  
}  

alert("Kết quả của phép tính trên: " + "a" + " " + operation + " " + "b" + " = " + result);  