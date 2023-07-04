
Sure! Let's start with a coding example that demonstrates the difference between a Map and an object for storing key-value pairs:

javascript
Copy code
// Using Map
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Using Object
const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

console.log(myMap.get('key2'));     // Output: value2
console.log(myObject['key2']);      // Output: value2
/*
const mapStart = performance.now();
const myMap = new Map();

for (let i = 0; i < 1000000; i++) {
  myMap.set(`key${i}`, `value${i}`);
}

const mapEnd = performance.now();
console.log('Map time:', mapEnd - mapStart);

const objStart = performance.now();
const myObject = {};

for (let i = 0; i < 1000000; i++) {
  myObject[`key${i}`] = `value${i}`;
}

const objEnd = performance.now();
console.log('Object time:', objEnd - objStart);
*/