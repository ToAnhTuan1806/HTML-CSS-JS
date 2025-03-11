function isPrime(num) {  
    if (isNaN(num) || num < 2) {  
        return "dữ liệu không hợp lệ";  
    }  
    let check = true;   
    for (let i=2; i<num; i++) {   
        if (num % i === 0) {  
            check = false;   
            break;   
        }  
    }  
    if (check) {  
        return "là số nguyên tố";  
    } else {  
        return "không phải là số nguyên tố";  
    }  
}  

let input = +prompt("Nhập một số nguyên dương");  
let result = isPrime(input);  
console.log(result);  