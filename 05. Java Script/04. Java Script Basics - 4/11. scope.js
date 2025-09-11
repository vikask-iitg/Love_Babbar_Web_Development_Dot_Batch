// ------------------------------
// Variable Scope in JavaScript
// ------------------------------

// There are three main ways to declare variables: var, let, and const
// Each has different rules for scope and reassignment.


// ------------------------------
// #1 - var
// ------------------------------

console.log("Var");
var a = 10;      // var is function-scoped (or globally scoped if declared outside)
console.log(a);

a = 20;          // var can be re-assigned
console.log(a);

{
    var a = 30;  // var ignores block scope → overwrites previous value
}
console.log(a);  // Output: 30


// ------------------------------
// #2 - let
// ------------------------------


console.log("Let");
// let is block-scoped and must be declared before use
let b = 20;
console.log(b);

{
    let ba = 40;  // ba exists only inside this block
    console.log(ba);
}

// console.log(ba); // ❌ Error: ba is not defined outside block


// ------------------------------
// #3 - const
// ------------------------------


console.log("Const");
// const is block-scoped like let, but cannot be reassigned
const c = 10;
console.log(c);

// c = 20; // ❌ Error: Assignment to constant variable
console.log(c);
