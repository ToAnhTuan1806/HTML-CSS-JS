let num = parseInt(prompt(`Nhập vào 1 số nguyên`));
let result = Number.isInteger(Math.sqrt(num))
  ? `${num} là số chính phương `
  : `${num} không phải là số chính phương `;
console.log(result);
