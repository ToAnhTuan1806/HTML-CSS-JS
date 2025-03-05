let a = +prompt("Nhập số a");  
let b = +prompt("Nhập số b");  
let c = +prompt("Nhập số c");  

if (isNaN(a) || isNaN(b) || isNaN(c)) {  
    console.log("Vui lòng nhập các số hợp lệ cho a, b và c");  
} else {  
    let delta = b * b - 4 * a * c;  

    if (delta > 0) {  
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);  
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);  
        console.log("Phương trình có 2 nghiệm phân biệt: " + "x1=" + x1 + "; " + "x2=" + x2);  
    } else if (delta === 0) {
        let x = -b / (2 * a);  
        console.log("Phương trình có nghiệm kép x1=x2=" + x);  
    } else {  
        console.log("Phương trình vô nghiệm");  
    }  
}  