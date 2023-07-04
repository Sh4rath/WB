let myarr = [];
for (let i = 0; i < 10000; i++) {
  myarr.push(i);
}
console.time("array search");
let k = myarr.includes(5000);
console.timeEnd("array search");

let myset = new Set();
for (i = 0; i < 10000; i++) {
  myset.add(i);
}
console.time("set search");
let k1 = myset.has(5000);
console.timeEnd("set search");
