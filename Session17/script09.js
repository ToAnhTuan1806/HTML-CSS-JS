let a = parseInt(prompt("Nhập số a"));
let b = parseInt(prompt("Nhập số b"));
let c = parseInt(prompt("Nhập số c"));

let delta = b*b - 4*a*c;
console.log("delta =", delta);

if (delta > 0) {  
    let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);  
    let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);  
    console.log("x1 =", x1);  
    console.log("x2 =", x2);  
}  
if (delta === 0) {  
    let x = -b / (2 * a);  
    console.log("Nghiệm kép x =", x);  
}  
if (delta < 0) {  
    console.log("Phương trình vô nghiệm");  
}  