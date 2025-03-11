// function decoleration
// khai bao hàm thông thường
// function displayTodo () {
//     for (let index in todoList) {
//         console.log(`${index + 1}. ${todoList[index]}`);
//     }
// }


// Parameter (Tham so dai dien)

// Arguments (Doi so thuc te)
// Function Execution
// mayBanNuoc("10k"); // "dasani"
// // Arguments (Doi so thuc te)
// mayBanNuoc("20k"); // "bo huc"
// // Arguments (Doi so thuc te)

// function mayBanNuoc(price) {
//     if(price === "10k") {
//         console.log("Ban vua mua 1 chai dasan")
//     } else if (price === "20k") {
//         console.log("Ban vua mua 1 lon bo huc")
//     } else {
//         console.log("Khong hop le")
//     }
// }


// Ex
// Viet mot chuong tirnh ham thuc hien
// Tinh toan va outpit ra ket qua cua 2 so
// Cac phep tinh ham nay co the nhan la +,-,*,/

// let result = calculate2Numbers(10, 20, "+");
// console.log(result);
// let result2 = calculate2Numbers(-1, 1, "-");
// alert(result2)
// calculate2Numbers(2, 3, "*")
// calculate2Numbers(4, 5, "/")

// function calculate2Numbers(number1, number2, operater) {
//     if(operater==="+") {
//         return`Tong = ${number1 + number2}`;
//     } else if(operater === "-") {
//         return`Hieu = "${number1 - number2}`;
//     } else if(operater === "*") {
//         return`Nhan =" ${number1 * number2}`;
//     } else if(operater === "/") {
//         return`Chia = ${number1 / number2}`;
//     } else {
//         return"Phep tinh k hop le"
//     }
// }

// calculate2Numbers(-2, 4, "/");

// Anonymous duction (Ham khong ten)

// IIFE - Immediate ivoking fuction express (Bieu thuic ngay lap tuc thuc thi ham)
// (function(name) {
//     console.log("Hello", name);
// }) ("Tuan") 

// Function expression (Luu tru ham khong ten vao bien)
// let sayHi = function(name) {
//     console.log("Hello", name);
// }

// sayHi("Moi");
// sayHi("Tonni")

// sayHi("Hello"); // underfind Hello

// let sayHi = function (name) {
//     console.log("Hello", name);
// }

// // sayHi: undefimd

// console.log(a);
// console.log(abc);
// // sayHi("Tuan")
// var a = 10;
// var abc = 20;

// function sayHi(name) {
//     console.log("Hello", name);
// }
// 










// Tham so parameters
// function calculateSum (number1, number2) {
//     // logic
//     // let number1 = 1 
//     // let number2 = 1
//     return number1 + number2
// }

// // Function Execution
// // THuc thi ham
// // Doi so thuc te Arguments

// let sum = calculateSum(10, 20); //30
// calculateSum(1,2); // 3
// calculateSum(-2,3); // 1

// console.log(sum);

// IIFE - Immediate ivoking fuction express (Bieu thuc ngay lap tuc thuc thi ham)
// let result = (function (a, b) {
//      return a*b
// })(10, 20);

// console.log(result);

// // Function expression - Bieu thuc ham
// let calculate = function (a, b) {
//     return a/b
// }

// calculate(10, 20);


// let result = calculateSum(10,20);
// console.log(result);

// function calculateSum(a,b) {
//     return a+b;
// }

let sum = (a, b) => {
    return a + b;
} 
console.log(sum(10,20));

let sum2 = (a, b) => a + b;
