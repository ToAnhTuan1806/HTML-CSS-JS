for (let i = 100; i < 1000; i++) {  
    let num = i; 
    let num1 = Math.floor(num / 100);  
    let num2 = Math.floor((num % 100) / 10);  
    let num3 = num % 10; 

    let total = Math.pow(num1,3) + Math.pow(num2,3) + Math.pow(num3,3);  

    if (total === num) {  
        console.log(num + " là số Armstrong");  
    }  
}  