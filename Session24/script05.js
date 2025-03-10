let arr = [];  
let choice;  
let loop = true;  

while (loop) {  
    choice = prompt(`  
    1. Nhập mảng 2 chiều  
    2. Hiển thị mảng 2 chiều  
    3. Tính tổng các phần tử trong mảng  
    4. Tính tổng đường chéo chính  
    5. Tính tổng đường chéo phụ  
    6. Tính trung bình cộng hàng/cột  
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
            } else if (arr.length !== arr[0].length) {  
                alert("Mảng không vuông, không có đường chéo chính.");  
            } else {  
                let sum = 0;  
                for (let i=0; i<arr.length; i++) {  
                    sum += arr[i][i];  
                }  
                alert("Tổng đường chéo chính: " + sum);  
            }  
            break;  

        case "5":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else if (arr.length !== arr[0].length) {  
                alert("Mảng không vuông, không có đường chéo phụ.");  
            } else {  
                let sum = 0;  
                for (let i=0; i<arr.length; i++) {  
                    sum += arr[i][arr.length - 1 - i];  
                }  
                alert("Tổng đường chéo phụ: " + sum);  
            }  
            break;  

        case "6":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let choice = prompt("Lựa chọn hàng (h) hoặc cột (c) để tính trung bình cộng:");  
                if (choice === 'h') {  
                    let rowNum = parseInt(prompt("Nhập số hàng:"));  
                    if (isNaN(rowNum) || rowNum <= 0 || rowNum > arr.length) {  
                        alert("Số hàng không hợp lệ.");  
                        break;  
                    }  

                    let sum = 0;  
                    for (let j = 0; j < arr[rowNum - 1].length; j++) {  
                        sum += arr[rowNum - 1][j];  
                    }  
                    let average = sum / arr[rowNum - 1].length;  
                    alert(`Trung bình cộng của hàng ${rowNum}: ${average}`);  
                } else if (choice === 'c') {  
                    let colNum = parseInt(prompt("Nhập số cột:"));  
                    if (isNaN(colNum) || colNum <= 0 || colNum > arr[0].length) {  
                        alert("Số cột không hợp lệ.");  
                        break;  
                    }  

                    let sum = 0;  
                    for (let i = 0; i < arr.length; i++) {  
                        sum += arr[i][colNum - 1];  
                    }  
                    let average = sum / arr.length;  
                    alert(`Trung bình cộng của cột ${colNum}: ${average}`);  
                } else {  
                    alert("Lựa chọn không hợp lệ.");  
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