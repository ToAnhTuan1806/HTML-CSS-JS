let number1 = +prompt("Nhập số thứ nhất:");
let number2 = +prompt("Nhập số thứ hai:");
let number3 = +prompt("Nhập số thứ ba:");

let maxNumber = number1;
if(number2 > maxNumber){
    maxNumber = number2
}
if(number3 > maxNumber){
    maxNumber = number3
}

console.log("Số lớn nhất trong 3 số là " + maxNumber);