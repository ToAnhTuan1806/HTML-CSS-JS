let evenNumArr = [];  
function evenNum(arr) {   
    for (let i=0; i<arr.length; i++) {  
        if (arr[i]%2===0) {  
            evenNumArr.push(arr[i]);  
        }  
    }  
    if (evenNumArr.length === 0) {  
        return "mảng không chứa số chẵn";  
    }  
    return evenNumArr.join(', ');  
}  

let num = parseInt(prompt("Nhập số lượng phần tử trong mảng:"));  
if (isNaN(num) || num <= 0) {  
    console.log("dữ liệu không hợp lệ");  
} else {  
    let numArray = [];  
    for (let i=0; i<num; i++) {  
        let element = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}`));  
        numArray.push(element);  
    }  
    let result = evenNum(numArray);  
    console.log(result);  
}  