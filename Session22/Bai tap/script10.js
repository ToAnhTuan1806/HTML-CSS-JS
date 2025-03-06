let arr = [];
let choice;
let loop = true;

let menu = `  
    MENU  
    1. Nhập vào mảng  
    2. Hiển thị mảng  
    3. Thêm phần tử  
    4. Sửa phần tử  
    5. Xóa phần tử  
    6. Thoát  
    Lựa chọn của bạn: `;

while (loop) {
  choice = +prompt(menu);

  switch (choice) {
    case 1:
      let count = +prompt("Nhập số lượng phần tử muốn thêm");
      for (let i = 0; i < count; i++) {
        let input = prompt("Nhập vào phần tử muốn thêm");
        arr.push(input);
      }
      console.log(arr);
      break;
    case 2:
      for (let i in arr) {
        console.log(`${i}. ${arr[i]}`);
      }
      break;
    case 3:
      let addNumber = +prompt("Nhập số lượng phần tử muốn thêm");
      let addIndex = +prompt("Nhập vị trí muốn thêm phần tử");
      for (let i = 0; i < addNumber; i++) {
        let addValue = +prompt("Mời nhập phần tử muốn thêm");
        arr.splice(addIndex, 0, addValue);
      }
      break;
    case 4:
      let editNumber = +prompt("Nhập vị trí muốn sửa");
      let editValue = +prompt("Nhập giá trị muốn sửa");
      arr[editNumber - 1] = editValue;
      break;
    case 5:
      let deleteNumber = +prompt("Nhập vị trí muốn xóa");
      arr.splice(deleteNumber - 1, 1);
      break;
    case 6:
      console.log("Kết thúc");
      loop = false;
      break;
  }
}
