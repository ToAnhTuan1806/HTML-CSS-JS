let num = parseInt(prompt("Nhập một số nguyên dương N:"));  

let sum = 0;  

if (num > 0) {  
    for (let i = 1; i <= num; i++) {  
        sum = sum + i;
    }  
    console.log(sum);  
} else {  
    console.log("Dữ liệu nhập vào không hợp lệ"); 
}  