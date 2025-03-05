let principal = +prompt("Nhập số tiền gốc ban đầu:");  
let interestRate = +prompt("Nhập lãi suất hàng tháng (%):");  
let month = +prompt("Nhập số tháng gửi:"); 

interestRate = interestRate / 100; 
let initialMoney = principal;

let finalMoney = initialMoney * Math.pow((1 + interestRate), month);  
let totalInterest = finalMoney - initialMoney;  

let formattedInterest = totalInterest.toFixed(3);  
let formattedFinalMoney = finalMoney.toFixed(3);  

console.log("Tiền lãi: " + formattedInterest);  
console.log("Tiền nhận được: " + formattedFinalMoney);  