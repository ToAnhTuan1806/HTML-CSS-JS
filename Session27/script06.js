function checkNum(arr) {  
    if (!Array.isArray(arr)) {  
        return "dữ liệu không hợp lệ";  
    }  
    if (arr.length < 2) {  
        return "dữ liệu không hợp lệ";  
    }  
    let difference = arr[1] - arr[0];  
    for (let i=1; i<arr.length - 1; i++) {  
        if (arr[i+1] - arr[i] !== difference) {  
            return false;
        }  
    }  
    return true; 
}  

let n = +prompt("Nhập số lượng phần tử");  
if (isNaN(n) || n <= 0) {  
    console.log("Số lượng phần tử không hợp lệ");  
} else {  
    let arr = [];  
    for (let i=0; i<n; i++) {  
        let num = +prompt(`Nhập phần tử thứ ${i+1}`);  
        if (isNaN(num)) {  
            alert(`Phần tử thứ ${i+1} không hợp lệ`);  
            i--;
            continue;   
        }  
        arr.push(num);  
    }  
    let result = checkNum(arr);  
    console.log(result);  
}  