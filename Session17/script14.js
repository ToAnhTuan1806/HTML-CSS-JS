const radius = parseFloat(prompt("Nhập bán kính hình trụ"));  
const height = parseFloat(prompt("Nhập chiều cao hình trụ"));  

const pi = Math.PI;  

const lateralArea = 2 * pi * radius * height;  

const totalArea = lateralArea + 2 * pi * radius * radius;  
 
const volume = pi * radius * radius * height;  

const bottomCircumference = 2 * pi * radius;  

console.log(`Diện tích xung quanh: ${lateralArea.toFixed(2)}`);  
console.log(`Diện tích toàn phần: ${totalArea.toFixed(2)}`);  
console.log(`Thể tích hình trụ: ${volume.toFixed(2)}`);  
console.log(`Chu vi đáy: ${bottomCircumference.toFixed(2)}`);