let arrInt = [];
for (let i=0; i<10; i++) {
    arrInt[i]= parseInt(prompt(`Nhap phan tu thu ${i+1}`));
    if (isNaN(arrInt[i])) {
        console.log("Khong co so lon nhat"); 
        break;
    }
}
console.log(arrInt)

let max = arrInt[0];
let index = 0;
if (arrInt.length>0) {
    for (let i=1; i<arrInt.length; i++) {
        if (arrInt[i]>max) {
            max=arrInt[i];
            index=i;
        }
    }
    console.log("So lon nhat: " + max);  
    console.log("Vi tri: " + index);  
} else {  
    console.log("Khong co so lon nhat"); 
}
