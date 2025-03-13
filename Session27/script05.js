let n = +prompt(`Nhập số lượng số`);  
if (isNaN(n) || n <= 0) {  
    alert(`Số lượng số không hợp lệ`);  
} else {  
    let arr = [];  
    for (let i=0; i<n; i++) {  
        let num = +prompt(`Nhập phần tử thứ ${i+1}`);  
        if (isNaN(num)) {  
            alert(`Phần tử thứ ${i + 1} không hợp lệ`);  
            i--;
            continue;   
        }  
        arr.push(num);  
    }  
    let chunkSize = +prompt(`Nhập số phần tử chia trong mảng con`);  
    if (isNaN(chunkSize) || chunkSize <= 0) {  
        alert(`Số không hợp lệ`);  
    } else {  
        let result = newArr(arr, chunkSize); 
        console.log(result);  
    }  
}  
function newArr(arr, num) {  
    let result = [];  
    for (let i=0; i<arr.length; i += num) {  
        result.push(arr.slice(i, i + num));  
    }  
    return result;  
}  