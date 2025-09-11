// -------------------------------
// Hoisting in JavaScript
// -------------------------------

// Definition of Hoisting :
// Process of moving function declaration to the top of the file.
// during the compilation phase. 
// - Function declarations are fully hoisted (can be called before defined).
// - Variables declared with var are hoisted and initialized with 'undefined'.
// - Variables declared with let/const are hoisted too, but kept in "temporal dead zone" 
//   until the declaration line is reached → accessing before that gives an error.

// -------------------------------
// Function Hoisting
// -------------------------------
console.log("Function Hoisting:", sum(10, 45)); // works even before function definition

function sum(a, b) {
    return a + b;
}

// -------------------------------
// Variable Hoisting with var
// -------------------------------
x = 10;          // assignment works (variable is hoisted as undefined first)
console.log("var x:", x);
var x;           // declaration is hoisted to the top

// -------------------------------
// Variable Hoisting with let
// -------------------------------

y = 10;          // ❌ ReferenceError: Cannot access 'y' before initialization
console.log(y);
let y;           // hoisted but in "temporal dead zone"


// -------------------------------
// Variable Hoisting with const
// -------------------------------

pinCode = 560103;  // ❌ ReferenceError: Cannot access 'carName' before initialization
console.log(pinCode);
const pinCode;      // ❌ SyntaxError: Missing initializer in const declaration

