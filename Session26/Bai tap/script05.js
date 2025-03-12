let n = +prompt("Nhập số lượng phần tử");  
let arrNum = [];  

for (let i=0; i<n; i++) {  
    let num = parseInt(prompt(`Phần tử thứ ${i + 1}`));  
    arrNum.push(num);  
}  

function checkMaxAndPos(arr) {  
    if (!Array.isArray(arr)) {  
        return "Dữ liệu không hợp lệ";  
    }  
    if (arr.length === 0) {  
        return "Mảng không có dữ liệu";  
    }  
    let max = Math.max(...arr);
    let index = arr.indexOf(max);  

    return `max = ${max} \n position: ${index}`;  
}  

let result = checkMaxAndPos(arrNum);  
console.log(result);  