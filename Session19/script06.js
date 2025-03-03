let a = parseInt(prompt("Nhập số a"));
let b = parseInt(prompt("Nhập số b"));
let c = parseInt(prompt("Nhập số c"));

let delta = b*b - 4*a*c;

if (delta > 0) {  
    let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);  
    let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);  
    console.log("Phương trình có 2 nghiệm phân biệt:"+ " " + "x1="+x1+";"+ "x2="+x2);  
}  
if (delta === 0) {  
    let x = -b / (2 * a);  
    console.log("Phương trình có nghiệm kép x1=x2="+x);  
}  
if (delta < 0) {  
    console.log("Phương trình vô nghiệm");  
}  