let month = prompt("Nhập một tháng bất kỳ trong năm");  

month = Number(month);  

if (month >= 1 && month <= 12) {  
    let season;  

    switch (month) {  
        case 1:  
        case 2:  
        case 3:  
            season = "Mùa xuân";  
            break;  
        case 4:  
        case 5:  
        case 6:  
            season = "Mùa hạ";  
            break;  
        case 7:  
        case 8:  
        case 9:  
            season = "Mùa thu";  
            break;  
        case 10:  
        case 11:  
        case 12:  
            season = "Mùa đông";  
            break;  
    }  
    console.log(season);  
} else {  
    console.log("Tháng không hợp lệ");  
}