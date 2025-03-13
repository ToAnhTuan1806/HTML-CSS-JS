let menu = `
-----Menu-----  
1. Cộng hai số  
2. Trừ hai số  
3. Nhân hai số  
4. Chia hai số  
5. Thoát  
Lựa chọn của bạn:   
`;  

let input;  

while(input !== 5) {  
    input = +prompt(menu);  

    if (input >= 1 && input <= 4) {   
        let num1 = parseFloat(prompt("Nhập số thứ nhất:"));  
        let num2 = parseFloat(prompt("Nhập số thứ hai:"));   

        let result;
        switch(input) {  
            case 1:  
                result = plusTwoNum(num1, num2);  
                break;  
            case 2:  
                result = minusTwoNum(num1, num2);  
                break;  
            case 3:  
                result = multiplyTwoNum(num1, num2);  
                break;  
            case 4:  
                result = divideTwoNum(num1, num2);  
                break;  
        }  
        console.log(result); 
    } else if (input === 5) {  
        console.log("Thank for using!!!")
        break;
    }  
}  

function plusTwoNum(num1, num2) {  
    return num1 + num2;  
}  
function minusTwoNum(num1, num2) {  
    return num1 - num2;  
}  
function multiplyTwoNum(num1, num2) {  
    return num1 * num2;  
}  
function divideTwoNum(num1, num2) {  
    if (num2 === 0) {  
        return "Không thể chia cho 0";  
    }  
    return num1 / num2;  
}  