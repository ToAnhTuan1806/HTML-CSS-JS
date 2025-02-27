const firstDate = new Date("2006-06-18");
const secondDate = new Date("2006-06-20");

let endDate = Math.abs(firstDate - secondDate);
let unevenDate = endDate/(1000*60*60*24);

console.log(unevenDate);
