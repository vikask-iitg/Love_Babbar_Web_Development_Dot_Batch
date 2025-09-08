// -------------------------------
// Data Types in JavaScript
// -------------------------------

// -------------------------------
// Primitive Data Types
// -------------------------------

// #1 - String
let firstName = "Vikas";
let lastName = "Khurendra";
let fullName = firstName + " " + lastName; // string concatenation

console.log("firstName:", firstName);  // Vikas
console.log("lastName:", lastName);    // Khurendra
console.log("fullName:", fullName);    // Vikas Khurendra


// #2 - Number
let num = 10.6;        // floating-point number
console.log(num);      // 10.6

num = 10;              // integer
console.log(num);      // 10


// #3 - Boolean
let bool = true;       // can be true or false
bool ? console.log("True") : console.log("False"); // True


// #4 - Undefined
let x;                 // declared but not assigned
console.log(x);        // undefined


// #5 - Null
let y = null;          // intentional empty value
console.log(y);        // null


// -------------------------------
// Non-Primitive Data Types
// -------------------------------

// #1 - Array
let arr = [1, 2, 3, 4, 5];  // array of numbers
console.log(arr);           // [1,2,3,4,5]

arr = ['my', 'name', 'is', 'Vikas']; // array of strings
console.log(arr);           // ['my','name','is','Vikas']
console.log(arr[0]);        // my (accessing index 0)


// #2 - Object
let obj = {
    "Name": "Vikas",
    "Age": 28
};

console.log(obj["Name"]);        // Vikas
console.log(typeof obj["Name"]); // string
console.log(typeof obj["Age"]);  // number
