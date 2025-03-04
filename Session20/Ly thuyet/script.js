// for ... loop

// for(let i = 0; i < 4; i = i + 1) {
//     console.log("Doc de")
//     console.log("Phan tich")
//     console.log("Code")
//     console.log("Dong may di ngu")
// }

// for (let i=0; i<5; i=i+1) {
//     for (let j=0; j<4; j+j+1) {
//         console.log(i, j);
//     }
// }


// B1:
// Cho 1 biến result = 49
// Cho người dùng nhập vào giá trị cần đoán
// Lặp đi lặp lại quá trình kiểm
// tra xem số người dùng đoán có === result
// Nếu trùng --> In ra là Bingo
// Nếu sai lặp đi lặp lại quá trình trên
// let result = 49;  
// let loop = true;  

// while (loop === true) {  
//     let check = +prompt("Nhập giá trị cần đoán");  

//     if (check === result) {  
//         console.log("Bingo");  
//         loop = false;  
//     } else {  
//         console.log("Sai rồi, nhập lại");  
//     }  
// }  

// let result = 49;
// let answer;

// while (answer !== result) {
//   let answer = +prompt("Mời bạn nhập vào số cần đoán");
// }

// console.log("Bingo");

let condition = 1;
do {
    console.log("Hello world");
} while (condition == 0);