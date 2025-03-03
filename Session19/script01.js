let month = +prompt("Nhập vào một tháng bất kỳ");

if (month >= 1 && month <= 12) {
    let dayOfMonth;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayOfMonth = "Tháng " + month + " có 31 ngày";  
            break;
        case 2:
            dayOfMonth = "Tháng " + month + " có 28 hoặc 29 ngày (năm nhuận)";  
            break;
        case 4:
        case 6:
        case 9:
        case 10:
        case 11:
            dayOfMonth = "Tháng " + month + " có 30 ngày";  
            break;

        default:
            break;
    }
    alert(dayOfMonth);
} else {
    alert("Tháng không hợp lệ")
}