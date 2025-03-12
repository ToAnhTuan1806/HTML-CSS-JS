let n = parseInt(prompt("Nhập số phần tử của mảng"));
let arrInt = [];
for (let i=0; i<n; i++) {
    let num = parseInt(prompt(`Phần tử thứ ${i+1}`));
    arrInt.push(num);
}

function squareArr (arr) {
    if(arr.length === 0) {
        return "Mảng không có dữ liệu"
    }
    let squareNum = arr.map(function(element, index) {
        return element * element;
    })

    let evenNum = squareNum.filter(function(element, index) {
        return element % 2 === 0;
    })
    return evenNum;
} 
let result = squareArr(arrInt);
console.log(result)