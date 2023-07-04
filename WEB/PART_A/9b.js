let myset = new Set();
myset.add(1);
myset.add(true);
myset.add("Hello");
myset.add(1);
console.log(myset);

let val = prompt("Enter the value to be searched");
if (myset.has(val)) {
  alert(val + "is present in the set");
} else {
  alert(val + "Is not present in the set");
}

console.log("Values in the set are : ");
myset.forEach(function (value) {
  console.log(value);
});
