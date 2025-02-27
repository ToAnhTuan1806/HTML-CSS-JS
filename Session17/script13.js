let amount = parseFloat(prompt("Nhập số tiền gửi"));
let months = parseInt(prompt("Nhập số tháng gửi"));
const annualInterestRate = 4.3;
let monthlyInterestRate = annualInterestRate / 100 / 12;

let interest = amount * monthlyInterestRate * months;
let totalAmount = amount + interest;

console.log(`Số tiền lãi nhận được: ${interest.toFixed(2)} VNĐ`);

