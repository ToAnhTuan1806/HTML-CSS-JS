let numbers = [2, 5, 7, 4, 1, 8, 6];  
let input = +prompt("Nhập vào một số bất kỳ");  

if (!isNaN(input)) {
  let check = false;  
  for (let i=0; i<numbers.length; i++) {  
    if (numbers[i] === input) {  
      check = true;  
      break;  
    }  
  }  

  if (check) {  
    console.log("Bingo");  
  } else {  
    console.log("Chúc bạn may mắn lần sau");  
  }  
} else {  
  console.log("Vui lòng nhập một số hợp lệ");  
}  