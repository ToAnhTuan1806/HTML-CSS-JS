let username = prompt("Nhập tên người dùng");  

if (username === null) {  
    console.log("Cancelled");  
} else if (username === "ADMIN") {  
    let password = prompt("Nhập mật khẩu:");  

    if (password === null) {  
        console.log("Cancelled");  
    } else if (password === "TheMaster") {  
        console.log("Welcome");  
    } else {  
        console.log("Wrong password");  
    }  
} else {  
    console.log("I Don’t know you");  
}