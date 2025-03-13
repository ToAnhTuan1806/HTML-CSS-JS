let menu = `  
-----Menu-----  
1. Tính diện tích hình tròn  
2. Tính chu vi hình tròn  
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật  
5. Thoát  
Lựa chọn của bạn:  
`;  

let input;  

while(input !== 5) {  
    input = +prompt(menu);  

    switch(input) {  
        case 1:  
            circularArea();
            break;  
        case 2:  
            circumferenceCircle();
            break;  
        case 3:  
            rectangularArea();
            break;  
        case 4:  
            circumferenceRectangular();
            break;  
        case 5:  
            console.log("Thank for using!!!");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ");  
    }  
}  

function circularArea() {  
    let radius = +prompt("Bán kính hình tròn:");  
    let area = Math.PI * radius * radius; 
    console.log(area.toFixed(2));  
}  

function circumferenceCircle() {  
    let radius = +prompt("Bán kính hình tròn:");  
    let perimeter = 2 * Math.PI * radius; 
    console.log(perimeter.toFixed(2));  
}  

function rectangularArea() {  
    let length = +prompt("Chiều dài hình chữ nhật:");  
    let width = +prompt("Chiều rộng hình chữ nhật:");  
    let area = length * width; 
    console.log(area.toFixed(2));  
}  

function circumferenceRectangular() {  
    let length = +prompt("Chiều dài hình chữ nhật:");  
    let width = +prompt("Chiều rộng hình chữ nhật:");  
    let perimeter = 2 * (length + width);  
    console.log(perimeter.toFixed(2));  
}  