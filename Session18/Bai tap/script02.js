let maths = parseFloat(prompt("Nhập điểm môn toán"));
let literary = parseFloat(prompt("Nhập điểm môn văn"));
let english = parseFloat(prompt("Nhập điểm môn anh"));

let total = (maths + literary + english) / 3;
console.log(total.toFixed(2));
let rank;

if (total >= 8.0) {
    rank = "Giỏi";
} else if (total >= 6.5) {
    rank = "Khá";
} else if (total >= 5.0) {
    rank = "Trung bình"
} else {
    rank = "Yếu"
}

console.log(rank);
