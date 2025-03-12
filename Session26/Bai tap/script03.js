let arrEmail = [
    "john.doe@gmail.com", 
    "invalidemail.com", 
    "hello@domain.net", 
    "space @out.com"
];
// let arrEmail = [];
// let arrEmail = "abc";  

function checkEmail(arr) {  
    if (!Array.isArray(arr)) {  
        return "Dữ liệu không hợp lệ";  
    }  
    if (arr.length === 0) {  
        return "Mảng không có phần tử nào";  
    }  
 
    let result = arr.filter(function(element, index) {  
        return element.includes("@") && !element.includes(" "); 
    });   

    if (result.length > 0) {  
        return result;  
    }
}  
console.log(checkEmail(arrEmail));  