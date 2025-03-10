let str = "";  
let choice;  
let loop = true;  

while (loop) {  
    choice = prompt(`  
    1. Nhập chuỗi  
    2. Hiển thị chuỗi  
    3. Tính độ dài của chuỗi  
    4. Đếm số lần xuất hiện của ký tự  
    5. Kiểm tra chuỗi đối xứng  
    6. In hoa chữ cái đầu mỗi từ  
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
                alert("Độ dài chuỗi: " + str.length);  
            }  
            break;  

        case "4":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let char = prompt("Nhập ký tự cần đếm:");  
                if (char.length !== 1) {  
                    alert("Vui lòng nhập một ký tự duy nhất.");  
                    break;  
                }  
                let count = 0;  
                for (let i=0; i<str.length; i++) {  
                    if (str[i] === char) {  
                        count++;  
                    }  
                }  
                alert(`Ký tự '${char}' xuất hiện ${count} lần.`);  
            }  
            break;  

        case "5":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let reversedStr = "";  
                for (let i=str.length-1; i>=0; i--) {  
                    reversedStr += str[i];  
                }  
                if (str === reversedStr) {  
                    alert("Chuỗi là đối xứng.");  
                } else {  
                    alert("Chuỗi không đối xứng.");  
                }  
            }  
            break;  

        case "6":  
            if (str === "") {  
                alert("Chuỗi đang rỗng.");  
            } else {  
                let words = str.split(" ");  
                let capitalizedStr = "";  
                for (let i=0; i<words.length; i++) {  
                    let word = words[i];  
                    if (word.length>0) {  
                        let firstChar = word[0].toUpperCase();  
                        let restOfWord = "";  
                        for (let j=1; j<word.length; j++) {  
                            restOfWord += word[j];  
                        }  
                        capitalizedStr += firstChar + restOfWord;  
                    } else {  
                        capitalizedStr += word;  
                    }  
                    if (i < words.length - 1) {  
                        capitalizedStr += " ";  
                    }  
                }  
                alert("Chuỗi sau khi in hoa chữ cái đầu: " + capitalizedStr);  
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