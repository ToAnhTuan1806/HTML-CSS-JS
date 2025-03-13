let menu = `
-----Menu-----
1. Nhập danh sách số nguyên
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
Lựa chọn của bạn:
`

let input;
let arrInt = [];

while(input !== 5) {
    input = +prompt(menu);

    switch(input) {
        case 1:
            listNumInt();
            break;
        case 2:
            averageNum();
            break;
        case 3:
            findMaxEven();
            break;
        case 4:
            findMinOdd();
            break;
        case 5:
            console.log("Thank for using!!!");
            break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
    }
}
function listNumInt () {
    let n = +prompt("Nhập số lượng phần tử");
    for(let i=0; i<n; i++) {
        let num = parseInt(prompt(`Nhập số nguyên thứ ${i+1}`));
        arrInt.push(num)
    }
    console.log(arrInt);
}

function averageNum() {  
    if (arrInt.length === 0) {  
        console.log("Danh sách số nguyên trống");  
        return;  
    }  
    let sum = 0;  
    for (let i=0; i<arrInt.length; i++) {  
        sum += arrInt[i]; 
    }  
    let average = sum / arrInt.length; 
    console.log(average.toFixed(2));  
}  

function findMaxEven() {  
    if (arrInt.length === 0) {  
        console.log("Danh sách số nguyên trống");  
        return;  
    }  
    
    let maxEven = arrInt[0];  
    let foundEven = maxEven % 2 === 0;  

    for (let i=1; i<arrInt.length; i++) {  
        if (arrInt[i] % 2 === 0) {  
            if (arrInt[i] > maxEven) {  
                maxEven = arrInt[i];  
            }  
            foundEven = true;  
        }  
    }  
    if (foundEven) {  
        console.log(maxEven);  
    } else {  
        console.log("Không có số chẵn trong danh sách");  
    }  
}  

function findMinOdd() {  
    if (arrInt.length === 0) {  
        console.log("Danh sách số nguyên trống");  
        return;  
    }  

    let minOdd = arrInt[0];  
    let foundOdd = minOdd % 2 !== 0;  

    for (let i=1; i<arrInt.length; i++) {  
        if (arrInt[i] % 2 !== 0) {  
            if (arrInt[i] < minOdd) {  
                minOdd = arrInt[i];  
            }  
            foundOdd = true;  
        }  
    }  
    if (foundOdd) {  
        console.log(minOdd);  
    } else {  
        console.log("Không có số lẻ trong danh sách");  
    }  
}  