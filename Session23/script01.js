let arrInt = [];
for (let i=0; i<10; i++) {
    arrInt[i] = parseInt(prompt(`Nhap phan tu thu ${i+1}`));
}

let count = [];
for (let i=0; i<arrInt.length; i++) {
    if (arrInt[i]>=10) {
        count.push(arrInt[i]);
    }
}
if (count.length>0) {
    console.log(count.join(' '));
} else {
    console.log("Khong co so nao lon hon 10");
}
