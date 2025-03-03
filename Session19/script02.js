let char = prompt("Nhập vào một ký tự bất kỳ");  

if (char.length !== 1) {  
    alert(char + " không phải chữ cái");  
} else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {  
    alert("Ký tự " + char + " là chữ cái");  
} else {  
    alert(char + " không phải chữ cái");   
}