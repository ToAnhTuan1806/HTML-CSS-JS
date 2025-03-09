let arr = [
  "", false, 0, 5, 10, "Hello world!",
  "", false, 0, undefined, null, 
  NaN, "test", 4,
  "JavaScript", 0, null, true, 7, " "
];
let arr2 = arr.filter(Boolean);
console.log(arr2);
