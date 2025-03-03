let math = parseFloat(prompt("Nhập điểm môn toán"));
let physics = parseFloat(prompt("Nhập điểm môn lý"));
let chemistry = parseFloat(prompt("Nhập điểm môn hoá"));

let total = (math + physics + chemistry) / 3;
console.log(total.toFixed(2));

let rank;

if (total >= 9.0) {
    rank = "Xuất sắc"
} else if (total >= 7.0) {
    rank = "Giỏi"
} else if (total >= 5.0) {
    rank = "Khá"
} else {
    rank = "Kém"
}
console.log(rank);