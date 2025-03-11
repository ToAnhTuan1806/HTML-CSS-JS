function isPalindrome(str) {  
    str = str.toLowerCase();  
    let check = true;  
    for (let i = 0; i < Math.floor(str.length / 2); i++) {  
        if (str[i] !== str[str.length - i - 1]) {  
            check = false;  
            break;  
        }  
    }  
    return check;  
}  
let input = prompt("Nhập vào chuỗi ký tự bất kỳ");  
if (input) {  
    if (isPalindrome(input)) {  
        console.log("là chuỗi đối xứng");  
    } else {  
        console.log("không phải là chuỗi đối xứng");  
    }  
} else {  
    console.log("không phải là chuỗi đối xứng");  
}  