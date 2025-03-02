// Yêu cầu người dùng nhập số  
let num = parseInt(prompt("Nhập vào một số từ 0 -> 9"));  

if (num >= 0 && num <= 9) {  
    let readNum;  

    switch (num) {  
        case 0:  
            readNum = "Số Không";  
            break;  
        case 1:  
            readNum = "Số Một";  
            break;  
        case 2:  
            readNum = "Số Hai";  
            break;  
        case 3:  
            readNum = "Số Ba";  
            break;  
        case 4:  
            readNum = "Số Bốn";  
            break;  
        case 5:  
            readNum = "Số Năm";  
            break;  
        case 6:  
            readNum = "Số Sáu";  
            break;  
        case 7:  
            readNum = "Số Bảy";  
            break;  
        case 8:  
            readNum = "Số Tám";  
            break;  
        case 9:  
            readNum = "Số Chín";  
            break;  
        default:  
            break;  
    }  

    console.log(readNum);  
} else {  
    console.log("Nhập số hợp lệ từ 0 -> 9");  
}