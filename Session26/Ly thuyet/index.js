// // Higher Order Function

// // Return a function as a result

// // Tạo ra 1 hàm, có nhiệm vụ là nhận vào 1 tham số
// // là một mảng các số

// // Đồng thời tăng các phần tử nằm trong mảng lên 10 đơn vị

// // Sau đó thì bình phương kết quả của các phần tử đã được tăng 10 đơn vị đó lên

// // Sau đó trả về kết quả là một mảng mới gồm các phần tử đã được tăng lên 10 đơn vị

// // và bình phương

// // TH1: Trả về hàm như 1 kết quả

// // let result = increase10AndSquare([1, 2, 3, 4]);

// // let result2 = increase10AndSquare([-1, -2, -3, -4]);

// // function increase10AndSquare(arr) {
// //     for(let index in arr) {
// //         arr[index] = arr[index] + 10;
// //     }
// //     return function() {
// //         for(let index in arr) {
// //             arr[index] = arr[index] ** 2;
// //         }
// //         return arr;
// //     }
// // }

// // console.log(result);
// // console.log(result2)



// // TH2: Nhận một hàm khác làm đối sô thực tế

// // Viết một hàm, nhận vào 1 mảng
// // Hàm sẽ có nhiệm vụ là thay đổi từng phần tử có trong mảng
// // Theo một công thức nào đó do ng sử dụng HÀM quyết định 

// // Trả về một mảng mới bao gồm các phần tử đã được thay đổi theo đúng
// // công thức

// let result = applyFormula([1, 2, 3 ,4], function(el) {
//     el = el + 10;
//     return el;
// }); // []
// console.log(result);

// let result2 = applyFormula([-1, -2, -3 ,-4], function(el) {
//     el = el ** 2;
//     return el;
// }); // []
// console.log(result2);

// function applyFormula(arr, fn) {
//     let result = [];
//     for(let index in arr) {
//         let el = fn(arr[index]);
//         result.push(el);
//     }
//     return result;
// }


// .forEach() (duyệt qua từng phần tử có trong mảng)

// let arr = [10, 20, 30, 40];

// arr.forEach(function(element, index) {
//     console.log(element, index);
// });


// .map() 

// let newArr = arr.map(function(element, index) {
//     return element + 10;
// }); // [20, 30, 40, 50]

// console.log(newArr);


// .filter() (lọc phân tử theo bộ điều kiện)

// let arr = [10, 20, 30, 40];

// let result = arr.filter(function(element, index) {
//     return element > 10;
// }); // []
// console.log(result);


// .reduce() - Giảm xuống (tích luỹ dần dần)

// let arr = [10, 20, 30, 40];

// let result = arr.reduce(function(acc, cur) {
//     // acc: accumulator: Biến tích luỹ

//     // cur: current value: Giá trị hiện tại của phan tu đang duyệt qua

//     acc = acc + cur;
//     return acc;
// }, 0);
// // NOTE: Trong th không truyền vào reduce giá trị khởi tạo 
// // dành cho accmulator (Biến tích luỹ)

// // Biến tích luỹ sẽ có giá trị khởi tạo mặc định là phần tử đầu tiên
// // trong mảng

// console.log(result);


// some & every
// let arr = [10, 20, 30, 40];

// // some - Một vài (kiểm tra liẹu có ít nhất 1 phần tử thoả mãn điều kiện hay không)

// let result = arr.some(function(element, index) {
//     return element > 40;
// }) // 
// console.log(result);

// // every - toàn bộ
// let result2 = arr.every(function(element, index) {
//     return element > 1;
// }) // 
// console.log(result2);






// function muFn(fn) {
//     fn();

//     return () => 10;
// }
// myFn(() => {});

// numberList.reduce(function (acc, cur){

// })
