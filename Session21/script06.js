let num = +prompt("Nhập một số nguyên bất kỳ");

if (isNaN(num)) {
    console.log("Số không hợp lệ");
} else {
    console.log("Uớc của " + num + " là:");  
    for (let i = 1; i <= num; i++) { 
        if (num % i === 0) { 
            console.log(i); 
        }  
    }  
}

  