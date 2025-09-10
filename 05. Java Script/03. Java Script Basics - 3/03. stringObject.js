// -------------------------------
// String Object in JavaScript
// -------------------------------

// Strings can be created using:
// 1. String literal -> let str = "text";
// 2. String object -> new String("text");

let str = new String("My name is Vikas"); // String object
console.log(str);              // [String: 'My name is Vikas']
console.log(typeof str);       // object (NOT primitive string)


// ---------- Properties ----------

// #1 - length (number of characters in string)
console.log(str.length); // 16


// ---------- Methods ----------

// #1 - toLowerCase() → convert string to lowercase
console.log(str.toLowerCase());

// #2 - toUpperCase() → convert string to uppercase
console.log(str.toUpperCase());

// #3 - charAt(index) → returns character at given position
console.log(str.charAt(4)); // 'n'

// #4 - charCodeAt(index) → returns ASCII/Unicode code of character
console.log(str.charCodeAt(4)); // 110 (code for 'n')

// #5 - startsWith(substr) → checks if string starts with given substring
console.log(str.startsWith("My")); // true

// #6 - endsWith(substr) → checks if string ends with given substring
console.log(str.endsWith("Vikas")); // true

// #7 - replace(old, new) → replaces first occurrence of substring
console.log(str.replace("Vi", "Pra")); // "My name is Prakas"


// #8 - trim() → removes extra spaces from start and end
let a = "  Vikas";  // spaces before string
console.log(a);       // "  Vikas"
console.log(a.trim()); // "Vikas"
