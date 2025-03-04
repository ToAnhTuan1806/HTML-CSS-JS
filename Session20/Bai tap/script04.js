let str = prompt("Nhập vào một chuỗi bất kỳ:");  
let search = prompt("Nhập vào ký tự cần tìm kiếm:");  
let result = false;  

for (let i = 0; i < str.length; i++) {  
    if (str[i] === search) {  
        result = true;  
        break;  
    }  
}  

if (result) {  
    console.log("Tồn tại ký tự cần tìm kiếm");  
} else {  
    console.log("Không tồn tại ký tự cần tìm kiếm");  
}  