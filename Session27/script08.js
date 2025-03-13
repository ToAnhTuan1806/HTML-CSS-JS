let input = prompt('Nhập một số nguyên:');  
function largestNumber(input) {  
    for (let i=0; i<input.length; i++) {  
        if (input[i] < '0' || input[i] > '9') {  
            return "dữ liệu không hợp lệ";  
        }  
    }  
    let largestNum = input.split('').sort((a, b) => b - a).join('');  
    return largestNum;  
}  
let result = largestNumber(input);  
console.log(result);  