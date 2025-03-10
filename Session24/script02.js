let arr = [];
let choice;
let loop = true;

while (loop) {
  choice = prompt(`  
    1. Nhập mảng số nguyên  
    2. Hiển thị mảng  
    3. Tìm các phần tử chẵn và lẻ  
    4. Tính trung bình cộng của mảng  
    5. Xóa phần tử tại vị trí chỉ định  
    6. Tìm phần tử lớn thứ hai trong mảng  
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
        let evenNumbers = [];
        let oddNumbers = [];
        for (let i=0; i<arr.length; i++) {
          if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
          } else {
            oddNumbers.push(arr[i]);
          }
        }
        alert(
          `Các phần tử chẵn: ${evenNumbers.join(
            ", "
          )}\nCác phần tử lẻ: ${oddNumbers.join(", ")}`
        );
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
        let average = sum / arr.length;
        alert("Trung bình cộng của mảng: " + average);
      }
      break;

    case "5":
      if (arr.length === 0) {
        alert("Mảng đang rỗng.");
      } else {
        let position = parseInt(prompt("Nhập vị trí cần xóa (tính từ 0):"));
        if (isNaN(position) || position < 0 || position >= arr.length) {
          alert("Vị trí không hợp lệ.");
          break;
        }
        arr.splice(position, 1);
        alert("Đã xóa phần tử tại vị trí " + position);
      }
      break;

    case "6":
      if (arr.length < 1) {
        alert(`Mảng chưa được nhập`);
        break;
      }
      let second_smallest;
      let arr2 = [];
      arr2 = arr.sort();
      let max = arr2[arr2.length - 1];
      for ( let i=arr2[arr2.length - 1]; i>=0; i--) {
        if (arr2[i] === max) {
          continue;
        } else if (arr2[i] < max) {
          second_smallest = arr2[i];
          break;
        }
      }
      alert(`Số lớn thứ hai trong mảng là : ${second_smallest}`);
      break;
    case "7":
      alert("Thoát chương trình.");
      loop = false;
      break;

    default:
      alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
  }
}
