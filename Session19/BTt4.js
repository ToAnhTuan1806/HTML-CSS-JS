let paymentAmount = Number(prompt("Nhập vào số tiền thanh toán (VNĐ):"));  
let tax = 0;  

if (paymentAmount < 500000) {  
    tax = paymentAmount * (5 / 100);  
} else if (paymentAmount >= 500000 && paymentAmount <= 1000000) {  
    tax = paymentAmount * (10 / 100);  
} else if (paymentAmount > 1000000) {  
    tax = paymentAmount * (15 / 100);  
}  

let totalBill = paymentAmount + tax;  

console.log(`Thuế là ${tax.toFixed(0)} VNĐ`);  
console.log(`Tổng giá trị hóa đơn là ${totalBill.toFixed(0)} VNĐ`);