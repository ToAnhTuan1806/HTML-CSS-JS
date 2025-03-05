let num = +prompt("Nhập một số nguyên bất kỳ");  

if (isNaN(num) || num < 2) {  
    console.log("Số không hợp lệ");  
} else {  
    let check = true;   
    for (let i = 2; i < num; i++) {   
        if (num % i === 0) {  
            check = false;   
            break;   
        }  
    }  
    if (check) {  
        console.log(num + " là số nguyên tố");  
    } else {  
        console.log(num + " không là số nguyên tố");  
    }  
}  