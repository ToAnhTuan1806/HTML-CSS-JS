let a = Number(prompt("Nhập chiều dài cạnh a"));  
let b = Number(prompt("Nhập chiều dài cạnh b"));  
let c = Number(prompt("Nhập chiều dài cạnh c"));  

if (a + b > c && a + c > b && b + c > a) {  
    console.log("Đây là một tam giác hợp lệ");  

    if (a === b && b === c) {  
        console.log("Là tam giác đều");  
    } else if (a === b || b === c || a === c) {  
        console.log("Là tam giác cân");  
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {  
        console.log("Là tam giác vuông");  
    } else {  
        console.log("Là tam giác thường");  
    }  
} else {  
    console.log("Không thể tạo thành tam giác");  
}