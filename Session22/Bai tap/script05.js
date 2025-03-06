let arrInt = [1, 4, 7, 8, 3];
let evenSum = 0;
let oddSum = 0;

for (let i=0; i<arrInt.length; i++) {
    if (arrInt[i] % 2 === 0) {
        evenSum += arrInt[i];
    } else {
        oddSum += arrInt[i];
    }
}
console.log("Tổng các số chẵn: " + evenSum);
console.log("Tổng các số lẻ: " + oddSum);



