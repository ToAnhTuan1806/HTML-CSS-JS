let input = prompt("Nhập dãy số bất kỳ");  

if (input) {
    let result = "";  
    let check = true;  

    for (let i=0; i<input.length; i++) {  
        if (isNaN(parseInt(input[i]))) {  
            check = false;  
            break;  
        }  
    }  

    if (check) {  
        for (let i=input.length-1; i>=0; i--) {  
            result += input[i];  
        }  
        console.log(result);  
    } else {  
        console.log("Dãy không hợp lệ");  
    }  
} else {  
    console.log("Bạn đã không nhập gì.");  
}  