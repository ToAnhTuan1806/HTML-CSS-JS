
let result1 = "javascript" + 5;  
console.log("result1:", result1); // Kết quả: "javascript5"  
// Số 5 được chuyển thành chuỗi và nối với "javascript", tạo thành "javascript5"


let result2 = "javascript" - 1;  
console.log("result2:", result2); // Kết quả: NaN  
// Không thể trừ một chuỗi không phải là số, kết quả là NaN


let result3 = "3" + 2;  
console.log("result3:", result3); // Kết quả: "32"  
// Số 2 được chuyển thành chuỗi và nối với "3", tạo thành "32"


let result4 = "5" - 4;  
console.log("result4:", result4); // Kết quả: 1  
// Chuỗi "5" được chuyển thành số 5, sau đó thực hiện phép trừ 5 - 4, kết quả là 1


let result5 = isNaN("123");  
console.log("result5:", result5); // Kết quả: false  
// "123" có thể chuyển đổi thành số, nên isNaN("123") trả về false


let result6 = isNaN("hello");  
console.log("result6:", result6); // Kết quả: true  
// "hello" không thể chuyển đổi thành số, nên isNaN("hello") trả về true


let result7 = Number.isNaN("123");  
console.log("result7:", result7); // Kết quả: false  
// "123" không phải là NaN, vì vậy Number.isNaN("123") trả về false


let result8 = Number.isNaN(NaN);  
console.log("result8:", result8); // Kết quả: true  
// NaN là giá trị duy nhất mà Number.isNaN sẽ trả về true