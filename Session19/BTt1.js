let month = +prompt("Nhập một tháng bất kỳ");
let year = +prompt("Nhập một năm bất kỳ");

if (month >= 1 && month <= 12) {
let dayInMonth;  

    switch (month) {  
        case 1:  
        case 3:  
        case 5:  
        case 7:  
        case 8:  
        case 10:  
        case 12:  
            dayInMonth = 31;  
            break;  
        case 4:  
        case 6:  
        case 9:  
        case 11:  
            dayInMonth = 30;  
            break;  
        case 2:  
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {  
                dayInMonth = 29;  
            } else {  
                dayInMonth = 28;  
            }  
            break;  
        default:  
            break;  
        }  
        console.log("Tháng " + month + " năm " + year + " có " + dayInMonth + " ngày");  
} else {
    console.log("Tháng không hợp lệ");
}
