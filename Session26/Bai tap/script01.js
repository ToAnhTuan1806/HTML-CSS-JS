let n = +parseInt(prompt("Nhập số phần tử của mảng"));
let arrInt = [];

for (let i=0; i<n; i++) {
    let num = parseInt(prompt(`Nhập số thứ ${i+1}`));
    arrInt.push(num);
}

function filterArray(arr) {  
    if (arrInt.length === 0) {  
        return "Mảng không có phần tử nào";
    }  
    for (let element of arr) {
        if(isNaN(element) || element === "") {
            return "Dữ liệu không hợp lệ"
        }
    }
    let result = arrInt.filter(function(element, index) {  
        return element >= 10; 
    });  

    if (result.length > 0) {  
        return result; 
    } else {  
        return "Không có phần tử lớn hơn bằng 10";
    }  
}  

console.log(filterArray(arrInt)); 


