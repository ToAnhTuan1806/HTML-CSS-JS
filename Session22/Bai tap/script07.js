let arrInt = [4,8,7,5,1,9,6,12,15,3];

for (let i=0; i<arrInt.length-1; i++) {  
  for (let j=i+1; j<arrInt.length; j++) {  
    if (arrInt[i] > arrInt[j]) {  
      let temp = arrInt[i];  
      arrInt[i] = arrInt[j];  
      arrInt[j] = temp;  
    }  
  }  
}  
console.log(arrInt);  