let num = Number(prompt("Nhập vào một số nguyên:"));  

if (isNaN(num) || !Number.isInteger(num)) {  
    console.log("dữ liệu nhập vào không hợp lệ");  
} else {  
    if (num < 0) {  
        console.log("dữ liệu nhập vào không hợp lệ");  
    } else {  
        let result = "";  
        for (let i = 1; i <= num; i++) {  
            if (i % 5 === 0) {  
                if (result !== "") {  
                    result += ", ";  
                }  
                result += i;  
            }  
        }  
        console.log(`Các số chia hết cho 5 từ 1 đến` + " " + num + " " + `là:`+ " " + result);  
    }  
}  