let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let input = parseInt(prompt("Nhập một số nguyên bất kì"));

let count = 0;
for (let i=0; i<numbers.length; i++) { 
    if (numbers[i] === input) {
        count++; 
    }
}
if (count > 0) {
    console.log("số "+ input +" xuất hiện " + count + " lần trong mảng");
} else {
    console.log("không tồn tại trong mảng");
}
