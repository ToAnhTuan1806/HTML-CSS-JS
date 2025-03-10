let arr = [];  
let choice;  
let loop = true;  

while (loop) {  
    choice = prompt(`  
    1. Nhập mảng 2 chiều  
    2. Hiển thị mảng 2 chiều  
    3. Tính tổng các phần tử trong mảng  
    4. Tìm phần tử lớn nhất và chỉ số  
    5. Tính trung bình cộng hàng cụ thể  
    6. Đảo ngược các hàng trong mảng  
    7. Thoát chương trình  
    Lựa chọn của bạn: `);  

    switch (choice) {  
        case "1":  
            let rows = parseInt(prompt("Nhập số hàng:"));  
            let cols = parseInt(prompt("Nhập số cột:"));  

            if (isNaN(rows) || rows <= 0 || isNaN(cols) || cols <= 0) {  
                alert("Số hàng hoặc số cột không hợp lệ.");  
                break;  
            }  

            arr = [];  
            for (let i=0; i<rows; i++) {  
                arr[i] = [];  
                for (let j=0; j<cols; j++) {  
                    let element = parseInt(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`));  
                    if (isNaN(element)) {  
                        alert("Phần tử không hợp lệ. Vui lòng nhập số nguyên.");  
                        arr = [];  
                        break;  
                    }  
                    arr[i][j] = element;  
                }  
                if (arr.length === 0) 
                break;
            }  

        case "2":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let output = "";  
                for (let i=0; i<arr.length; i++) {  
                    output += arr[i].join(", ") + "\n";  
                }  
                alert("Mảng 2 chiều:\n" + output);  
            }  
            break;  

        case "3":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let sum = 0;  
                for (let i=0; i<arr.length; i++) {  
                    for (let j=0; j<arr[i].length; j++) {  
                        sum += arr[i][j];  
                    }  
                }  
                alert("Tổng các phần tử trong mảng: " + sum);  
            }  
            break;  

        case "4":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let max = arr[0][0];  
                let maxRow = 0;  
                let maxCol = 0;  

                for (let i=0; i<arr.length; i++) {  
                    for (let j=0; j<arr[i].length; j++) {  
                        if (arr[i][j] > max) {  
                            max = arr[i][j];  
                            maxRow = i;  
                            maxCol = j;  
                        }  
                    }  
                }  
                alert(`Phần tử lớn nhất là ${max} tại hàng ${maxRow + 1}, cột ${maxCol + 1}`);  
            }  
            break;  

        case "5":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let rowNum = parseInt(prompt("Nhập số hàng:"));  
                if (isNaN(rowNum) || rowNum <= 0 || rowNum > arr.length) {  
                    alert("Số hàng không hợp lệ.");  
                    break;  
                }  

                let sum = 0;  
                for (let j=0; j<arr[rowNum - 1].length; j++) {  
                    sum += arr[rowNum - 1][j];  
                }  
                let average = sum / arr[rowNum - 1].length;  
                alert(`Trung bình cộng của hàng ${rowNum}: ${average}`);  
            }  
            break;  

        case "6":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                for (let i=0; i<arr.length; i++) {  
                    arr[i].reverse();  
                }  
                alert("Các hàng đã được đảo ngược.");  
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