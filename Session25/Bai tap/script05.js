let arrInt = [];
function countNumInt(n) {
    let count = 0;
    for (let i=0; i<n; i++) {
        arrInt[i] = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}`));
        if (arrInt[i] > 0 && Number.isInteger(arrInt[i])) {
        count++;
        }
    }
    if (count === 0) {
        console.log("không có số nguyên dương trong mảng");
    } else {
        console.log(count);
    }
}
let n = +prompt("Nhập số phần tử");
countNumInt(n);
