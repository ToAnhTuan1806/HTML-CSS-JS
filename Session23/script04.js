let n = +prompt("Nhap so luong phan tu");
let arr = [];
let str = ""

if (n>0) {
    for (let i=0; i<n; i++) {
        let input = prompt(`Nhap vao phan tu thu ${i+1}: `);
        arr.push(input);
    }

    for (let i=0; i<n; i++) {
        if (Number.isInteger(parseInt(arr[i]))) {
            str += arr[i] + " ";
        }
    }
    console.log(str);
} else {
    console.log("Mang khong co phan tu")
}