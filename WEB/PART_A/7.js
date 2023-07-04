function insertElements() {
  var arr = [];
  var numElements = parseInt(prompt("Enter the number of elements to insert:"));

  for (var i = 0; i < numElements; i++) {
    var element = parseInt(prompt("Enter element " + (i + 1) + ":"));
    arr.push(element);
  }

  return arr;
}

// Function to perform binary search on a sorted array
function binarySearch(arr, key) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      return mid; // Key found at index mid
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // Key not found
}

// Insert elements into the array
var array = insertElements();

// Prompt the user to enter the key to search
var key = parseInt(prompt("Enter the key to search:"));

// Sort the array in ascending order
array.sort();

// Perform binary search on the array
var result = binarySearch(array, key);

// Display the search result
if (result === -1) {
  alert("Key not found.");
} else {
  alert("Key found at index: " + result);
}
