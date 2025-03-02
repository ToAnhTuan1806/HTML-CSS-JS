let experience = parseInt(prompt("Nhập vào số năm kinh nghiệm của nhân viên"));  

let category;  

if (experience < 1) {  
    category = "Mới vào nghề";  
} else if (experience >= 1 && experience <= 3) {  
    category = "Nhân viên có kinh nghiệm";  
} else if (experience >= 4 && experience <= 6) {  
    category = "Chuyên viên";  
} else {  
    category = "Quản lý";  
}  

console.log(category);