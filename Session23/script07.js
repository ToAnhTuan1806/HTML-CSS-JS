let n = +prompt("Nhap so luong phan tu");  
let arr = [];  

if (n>0) {  
    for (let i=0; i<n; i++) {  
        let input = +prompt(`Nhap vao phan tu thu ${i + 1}: `);  
        arr.push(input);  
    }  

    if (arr.length>1) {  
        for (let i=0; i<arr.length-1; i++) {  
            for (let j=0; j<arr.length-i-1; j++) {  
                if (arr[j] < arr[j + 1]) {  
                    let temp = arr[j];  
                    arr[j] = arr[j + 1];  
                    arr[j + 1] = temp;  
                }  
            }  
        }  

        let max2 = arr[0];  
        for (let i=1; i<arr.length; i++) {  
            if (arr[i] < arr[0]) {  
                max2 = arr[i];  
                break;  
            }  
        }  

        if (max2 === arr[0]) {  
            console.log("Khong co so lon thu hai khac so lon thu nhat");  
        } else {  
            console.log(max2);  
        }  
    } 

} else if (n === 0) {  
    console.log("Mang khog co phan tu nao");  
} else {  
    console.log("So luong phan tu khong duoc nho hon 0");  
}  