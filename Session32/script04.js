function checkEmail() {  
    let email = document.getElementById("emailInput").value;  
    let result = document.getElementById("result")
    
    if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))) {  
        result.textContent = "Email hợp lệ!"
        result.className = "valid"
    } else {  
        result.textContent = "Email không hợp lệ!"
        result.className = "invalid"
    } 
}  