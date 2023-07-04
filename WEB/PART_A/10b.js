var myMap = new Map();

// Add values to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "London");

// Retrieve value from the Map using key
var key = "age";
if (myMap.has(key)) {
  var value = myMap.get(key);
  console.log("Value for key '" + key + "':", value);
} else {
  console.log("Key '" + key + "' not found in the Map.");
}

// Iterate over the Map
console.log("Entries in the Map:");
myMap.forEach(function (value, key) {
  console.log(key + ":", value);
});
