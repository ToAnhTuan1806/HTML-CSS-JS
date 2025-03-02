let year = parseInt(prompt("Nhập một năm bất kỳ"));  

if (year !== year) {  
    console.log("Vui lòng nhập một số hợp lệ");  
} else {  
    let isLeapYear;  

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {  
        isLeapYear = true;  
        console.log(year + " là năm nhuận");  
    } else {  
        isLeapYear = false;  
        console.log(year + " không phải là năm nhuận");  
    }  
}