function isStrongPassword(password) {  
    if (password.length < 8) {  
        return false;
    }  
    let hasUpperCase = false;  
    let hasLowerCase = false;  
    let hasNumber = false;   
    for (let char of password) {  
        if (char>='A' && char<='Z') {  
            hasUpperCase = true;  
        } else if (char>='a' && char<='z') {  
            hasLowerCase = true;   
        } else if (char>='0' && char<='9') {  
            hasNumber = true;   
        }  
    }  
    return hasUpperCase && hasLowerCase && hasNumber;  
}  
let input = prompt("Nhập mật khẩu bất kỳ")
console.log(isStrongPassword(input));  





















  