let arrChar = [];  
let n = +prompt("Nhap so phan tu");  
if (n === 0) {  
    console.log("Mang khong co phan tu");  
} else if (n < 0) {  
    console.log("So luong phan tu khong duoc am");  
} else {  
    let sum = 0;  
    let hasNumber = false;  

    for (let i = 0; i < n; i++) {  
        arrChar[i] = prompt(`Nhap ky tu thu ${i + 1}`);  
        const num = parseFloat(arrChar[i]);

        if (!isNaN(num)) { 
            sum += num;  
            hasNumber = true;  
        }  
    }  

    if (!hasNumber) {  
        console.log("Khong co phan tu nao la so");  
    } else {  
        console.log(sum);  
    }  
}  