let input = prompt("Nhập dãy số bất kỳ");  

if (isNaN(input)) { 
  console.log(`Dãy không hợp lệ`); 
} else {
  let input2 = input.split(""); 
  let max = 0; 

  for (let i = 0; i < input2.length - 1; i++) { 
    if (input2[i + 1] > max) { 
      max = input2[i + 1]; 
    }
  }

  console.log(`${max} là số lớn nhất trong dãy`); 
}
