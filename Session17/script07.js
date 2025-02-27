let cash = parseInt(prompt("Nhập vào một số bất kỳ"));

console.log(cash.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}));