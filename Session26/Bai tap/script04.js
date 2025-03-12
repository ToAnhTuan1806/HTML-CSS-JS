let n = +prompt("Nhập số phần tử của mảng");  
let arrInt = [];  
for (let i=0; i<n; i++) {  
    let num = parseInt(prompt(`Phần tử thứ ${i + 1}`));  
    arrInt.push(num);      
}  

function isPrime(num) {  
    if (num < 2)   
        return false;  
    for (let i=2; i<=Math.sqrt(num); i++) {  
        if (num % i === 0) {  
            return false;  
        }  
    }  
    return true;  
}  

function filterPrime(arr) {  
    if (!Array.isArray(arr)) {  
        return "Dữ liệu không hợp lệ";  
    }  
    if (arr.length === 0) {  
        return "Mảng không có phần tử nào";  
    }  
    let result = arr.filter(function(element) {  
        if (isNaN(element) || element === "") {  
            return false; 
        }  
        return isPrime(element);
    });  
    if (result.length > 0) {  
        return result;   
    }
}  
let output = filterPrime(arrInt);  
console.log(output);  