let str = "";  
let choice;  
let loop = true;  

while (loop) {  
    choice = prompt(`  
    1. Nhập chuỗi  
    2. Hiển thị chuỗi  
    3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi  
    4. Đảo ngược chuỗi ký tự  
    5. Đếm số lượng từ trong chuỗi ký tự  
    6. Tìm kiếm và thay thế các ký tự  
    7. Thoát chương trình  
    Lựa chọn của bạn: `);  

    switch (choice) {  
        case "1":  
            str = prompt("Nhập chuỗi:");  
            break;  

        case "2":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                alert("Chuỗi: " + str);  
            }  
            break;  

        case "3":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let start = 0;  
                let end = str.length - 1;  
                while (start<end+1 && str[start] === ' ') {  
                    start++;  
                }  
                while (end>start-1 && str[end] === ' ') {  
                    end--;  
                }  
                let deleteStr = "";  
                for (let i=start; i<end+1; i++) {  
                    deleteStr += str[i];  
                }  
                str = deleteStr;
                alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);  
            }  
            break;  

        case "4":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let reversedStr = "";  
                for (let i=str.length-1; i>-1; i--) {  
                    reversedStr += str[i];  
                }  
                alert("Chuỗi đảo ngược: " + reversedStr);  
            }  
            break;  

        case "5":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let wordCount = 0;  
                let inWord = false;  
                for (let i=0; i<str.length; i++) {  
                    if (str[i] !== ' ') {  
                        if (!inWord) {  
                            wordCount++;  
                            inWord = true;  
                        }  
                    } else {  
                        inWord = false;  
                    }  
                }  
                alert("Số lượng từ trong chuỗi: " + wordCount);  
            }  
            break;  

        case "6":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let charToReplace = prompt("Nhập ký tự cần thay thế:");  
                if (charToReplace === null || charToReplace.length !== 1) {  
                    alert("Vui lòng nhập một ký tự duy nhất.");  
                    break;  
                }  
                let replacementChar = prompt("Nhập ký tự thay thế:");  
                if (replacementChar === null || replacementChar.length !== 1) {  
                    alert("Vui lòng nhập một ký tự duy nhất.");  
                    break;  
                }  

                let newStr = "";  
                let found = false;  
                for (let i=0; i<str.length; i++) {  
                    if (str[i] === charToReplace) {  
                        newStr += replacementChar;  
                        found = true;  
                    } else {  
                        newStr += str[i];  
                    }  
                }  

                if (found) {  
                    str = newStr;
                    alert("Chuỗi sau khi thay thế: " + str);  
                } else {  
                    alert("Không tìm thấy ký tự '" + charToReplace + "' trong chuỗi.");  
                }  
            }  
            break;  

        case "7":  
            alert("Thoát chương trình.");  
            loop = false;  
            break;  

        default:  
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");  
    }  
}  