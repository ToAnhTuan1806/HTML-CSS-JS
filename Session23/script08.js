let n = +prompt("Nhập số lượng phần tử");  
let arr = [];  

if (n > 0) {  
    for (let i = 0; i < n; i++) {  
        let input = +prompt(`Nhập vào số lượng phần tử ${i + 1}: `);  
        arr.push(input);  
    }  

    if (arr.length > 0) { 
        let isFibonacci = true;  

        if (arr.length >= 2) {  
            for (let i=2; i<arr.length; i++) {  
                if (arr[i] !== arr[i - 1] + arr[i - 2]) {  
                    isFibonacci = false;  
                    break;  
                }  
            }  
        } else if (arr.length === 1) {  
            isFibonacci = false;   
        }  

        if (isFibonacci) {  
            console.log("Là dãy số fibonacci");  
        } else {  
            console.log("Không phải dãy số fibonacci");  
        }  
    }

} else if (n === 0) {  
    console.log("Không phải dãy số fibonacci"); 
} else {  
    console.log("Số lượng phần tử không được nhỏ hơn 0");  
}  

