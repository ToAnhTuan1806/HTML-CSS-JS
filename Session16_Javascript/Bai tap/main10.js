let num1 = parseInt(prompt("Nhập số thứ nhất:"));  
let num2 = parseInt(prompt("Nhập số thứ hai:"));  

let minNum = Math.min(num1, num2);  
let maxNum = Math.max(num1, num2);  

let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;  

console.log(randomNum);