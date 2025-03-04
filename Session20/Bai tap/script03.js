let num = Number(prompt("Nhập vào một chuỗi số nguyên bất kỳ"));  
let check = true;  

if (Number.isInteger(num)) {  
    let strNum = num.toString();   
    for (let i = 0; i < strNum.length; i++) {  
        if (strNum[i] !== strNum[strNum.length - i - 1]) {  
            check = false;  
            break;  
        }  
    }  
    if (check) {  
        console.log("Là số đối xứng");  
    } else {  
        console.log("Không phải số đối xứng");  
    }  
} else {  
    console.log("Số không hợp lệ");  
}  