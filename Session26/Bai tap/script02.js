let n = prompt("Nhập số phần tử của mảng");
let arrStr = [];

for(let i=0; i<n; i++) {
    let str = prompt(`Phần tử thứ ${i+1}`)
    arrStr.push(str)
}
function filterArray(arr) {  
    if(!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ"
    }
    if (arrStr.length === 0) {  
        return "Mảng không có phần tử nào";
    }  
 
    let result = arrStr.filter(function(element, index) {  
        return element.length > 5; 
    });  

    if (result.length > 0) {  
        return result; 
    }
}  
console.log(filterArray(arrStr)); 


