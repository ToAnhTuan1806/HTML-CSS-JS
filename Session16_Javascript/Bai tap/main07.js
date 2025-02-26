let math = prompt("Nhập điểm toán");
let physics = prompt("Nhập điểm lý");
let chemistry = prompt("Nhập điểm hoá");

let sum = (Number(math) + Number(physics) + Number(chemistry)) / 3 

alert(sum.toFixed(2));