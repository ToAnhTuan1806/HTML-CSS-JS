function findSmallest(arr) {  
  if (arr.length < 1) {  
    return "Mảng không chứa phần tử";
  }  
  let min = arr[0];   
  for (let i=1; i<arr.length; i++) {  
    if (isNaN(arr[i])) { 
      return "Giá trị không hợp lệ"; 
    }    

    if (arr[i] < min) {  
      min = arr[i];
    }  
  }  
  return `Phần tử nhỏ nhất là ${min}`;
}  
let arr = [2, 4, 8, 1, 9];  
let min = findSmallest(arr);  
console.log(min);