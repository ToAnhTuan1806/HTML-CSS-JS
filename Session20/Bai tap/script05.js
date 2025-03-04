let a = Number(prompt("Nhập vào số a"));
let b = Number(prompt("Nhập vào số b"));

let result = 1;  

if (Number.isInteger(a) && Number.isInteger(b) && b >= 0) {  

    for (let i = 0; i < b; i++) {  
        result = result * a;
    }  
    console.log(result);
} else {  
    console.log("Không hợp lệ");  
}  