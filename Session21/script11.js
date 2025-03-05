let day = +prompt("Nhập ngày sinh:");  
let month = +prompt("Nhập tháng sinh:");  

let zodiacSign = "";  

if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {  
    zodiacSign = "Bạch Dương (Aries)";  
} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {  
    zodiacSign = "Kim Ngưu (Taurus)";  
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {  
    zodiacSign = "Song Tử (Gemini)";  
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {  
    zodiacSign = "Cự Giải (Cancer)";  
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {  
    zodiacSign = "Sư Tử (Leo)";  
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {  
    zodiacSign = "Xử Nữ (Virgo)";  
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {  
    zodiacSign = "Thiên Bình (Libra)";  
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {  
    zodiacSign = "Bọ Cạp (Scorpio)";  
} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {  
    zodiacSign = "Nhân Mã (Sagittarius)";  
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {  
    zodiacSign = "Ma Kết (Capricorn)";  
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {  
    zodiacSign = "Bảo Bình (Aquarius)";  
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {  
    zodiacSign = "Song Ngư (Pisces)";  
} else {  
    zodiacSign = "Ngày tháng không hợp lệ";  
}  

console.log("Cung hoàng đạo của bạn là: " + zodiacSign);  