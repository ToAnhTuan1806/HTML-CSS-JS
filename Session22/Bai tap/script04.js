let input = prompt("Nhập dãy số bất kỳ");  

let arr = input.split("");  
let max = parseInt(arr[0]);  
let check = true;  

for (let i=0; i<arr.length; i++) {  
    let num = parseInt(arr[i]);  
    if (isNaN(num)) {  
        check = false;  
        break;   
    }  
    if (num > max) {  
        max = num;   
    }  
}  
if (check) {  
    console.log(max + " là số lớn nhất trong dãy số");  
} else {  
    console.log("Dãy số không hợp lệ");  
}  