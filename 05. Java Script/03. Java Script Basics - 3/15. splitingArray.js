// -------------------------------
// Splitting a String into an Array
// -------------------------------

// A string can be split into an array using the split() method.
// We pass a separator (like space, comma, etc.) to define how the split should happen.

let message = "My name is Vikas";
console.log(message);  // Original string

// Split the string at every space (" ")
let arr = message.split(" ");
console.log(arr);  // Output: ["My", "name", "is", "Vikas"]

// Iterate through the array using forEach
arr.forEach(e => console.log(e));
