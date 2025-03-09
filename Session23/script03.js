let arrInt = [];
let count = 0;
let n = +prompt("Nhap so phan tu");
if (n === 0) {
    console.log("Mang khong co phan tu");
} else if (n<0) {
    console.log("So luong phan tu khong hop le")
} else {
    for (let i=0; i<n; i++) {
        arrInt[i]= parseFloat(prompt(`Nhap phan tu thu ${i+1}`));
        if(arrInt[i]<0) {
            count ++;
        }
    }
    if (count===0){
        console.log("Mang khong co so am")
    } else {
        console.log(count)
    }

}

