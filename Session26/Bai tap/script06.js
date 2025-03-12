let n = parseInt(prompt("Nhập số lượng ngày muốn thêm vào mảng"));  
let arrStr = [];  

for (let i = 0; i < n; i++) {  
    let dateInput = prompt(`Nhập ngày thứ ${i + 1}`);  
    arrStr.push(dateInput);  
}  

function formatDates(arr) {  
    let formatDate = arr.map(function(dateStr) {  
        let date = new Date(dateStr);  
        if (isNaN(date.getTime())) {  
            return "Dữu liệu không hợp lệ";  
        }  
        let day = String(date.getDate()).padStart(2, '0');  
        let month = String(date.getMonth() + 1).padStart(2, '0');  
        let year = date.getFullYear();  
        
        return `${day}/${month}/${year}`;  
    });  
    
    return formatDate;  
}  

if (arrStr.length === 0) {  
    console.log("Mảng không có phần tử nào");  
} else {  
    let formattedDates = formatDates(arrStr);  

    if (formattedDates.includes("Dữ liệu không hợp lệ")) {  
        let invalidIndex = [];  
        formattedDates.forEach(function(result, index) {  
            if (result === "Dữ liệu không hợp lệ") {  
                invalidIndex.push(index + 1);  
            }  
        });  
    } else {  
        console.log(formattedDates); 
    }  
}  