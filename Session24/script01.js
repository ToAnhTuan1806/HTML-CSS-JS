let arr = [];  
let choice;  
let loop = true;  

while (loop) {  
  choice = prompt(`  
    1. Nhập mảng  
    2. Hiển thị mảng  
    3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng  
    4. Tính tổng các phần tử trong mảng  
    5. Tìm số lần xuất hiện của một phần tử trong mảng  
    6. Sắp xếp mảng tăng dần  
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
        let min = arr[0];  
        for (let i=1; i<arr.length; i++) {  
          if (arr[i]>max) {  
            max=arr[i];  
          }  
          if (arr[i]<min) {  
            min=arr[i];  
          }  
        }  
        alert(`Phần tử lớn nhất: ${max}, phần tử nhỏ nhất: ${min}`);  
      }  
      break;  

    case "4":  
      if (arr.length === 0) {  
        alert("Mảng đang rỗng.");  
      } else {  
        let sum = 0;  
        for (let i=0; i<arr.length; i++) {  
          sum += arr[i];  
        }  
        alert("Tổng các phần tử trong mảng: " + sum);  
      }  
      break;  

    case "5":  
      if (arr.length === 0) {  
        alert("Mảng đang rỗng.");  
      } else {  
        let findElement = parseInt(prompt("Nhập phần tử cần tìm:"));  
        if (isNaN(findElement)) {  
          alert("Phần tử không hợp lệ. Vui lòng nhập số nguyên.");  
          break;  
        }  
        let count = 0;  
        for (let i=0; i<arr.length; i++) {  
          if (arr[i] === findElement) {  
            count++;  
          }  
        }  
        alert(`Phần tử ${findElement} xuất hiện ${count} lần trong mảng.`);  
      }  
      break;  

    case "6":  
      if (arr.length === 0) {  
        alert("Mảng đang rỗng.");  
      } else {  
        for (let i=0; i<arr.length - 1; i++) {  
          for (let j=0; j<arr.length - i - 1; j++) {  
            if (arr[j]>arr[j + 1]) {  
              let temp=arr[j];  
              arr[j]=arr[j + 1];  
              arr[j + 1]=temp;  
            }  
          }  
        }  
        alert(`Mảng đã được sắp xếp tăng dần ${arr} `);  
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