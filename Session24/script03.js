let arr = [];  
let choice;  
let loop = true;  

while (loop) {  
    choice = prompt(`  
    1. Nhập mảng số nguyên  
    2. Hiển thị mảng  
    3. Tìm phần tử lớn nhất và chỉ số  
    4. Tính tổng và trung bình cộng số dương  
    5. Đảo ngược mảng  
    6. Kiểm tra mảng đối xứng  
    7. Thoát chương trình  
    Lựa chọn của bạn: `);  

    switch (choice) {  
        case "1":  
            let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));  
            if (isNaN(n) || n <= 0) {  
                alert("Số lượng phần tử không hợp lệ.");  
                break;  
            }  
            arr = [];  
            for (let i=0; i<n; i++) {  
                let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));  
                if (isNaN(element)) {  
                    alert("Phần tử không hợp lệ. Vui lòng nhập số nguyên.");  
                    arr = [];  
                    break;  
                }  
                arr.push(element);  
            }  
            
        case "2":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                alert("Mảng: " + arr.join(", "));  
            }  
            break;  

        case "3":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let max = arr[0];  
                let index = 0;  
                for (let i=1; i<arr.length; i++) {  
                    if (arr[i]>max) {  
                        max=arr[i];  
                        index=i;  
                    }  
                }  
                alert(`Phần tử lớn nhất là ${max} tại chỉ số ${index}`);  
            }  
            break;  

        case "4":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let sum = 0;  
                let count = 0;  
                for (let i=0; i<arr.length; i++) {  
                    if (arr[i]>0) {  
                        sum+=arr[i];  
                        count++;  
                    }  
                }  
                if (count === 0) {  
                    alert("Không có số dương trong mảng.");  
                } else {  
                    let average = sum / count;  
                    alert(`Tổng các số dương: ${sum}, Trung bình cộng: ${average}`);  
                }  
            }  
            break;  

        case "5":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                arr.reverse();  
                alert("Mảng đã được đảo ngược: " + arr.join(", "));  
            }  
            break;  

        case "6":  
            if (arr.length === 0) {  
                alert("Mảng đang rỗng.");  
            } else {  
                let isSymmetric = true;  
                for (let i=0; i<Math.floor(arr.length/2); i++) {  
                    if (arr[i]!==arr[arr.length-1-i]) {  
                        isSymmetric = false;  
                        break;  
                    }  
                }  
                if (isSymmetric) {  
                    alert("Mảng đối xứng.");  
                } else {  
                    alert("Mảng không đối xứng.");  
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