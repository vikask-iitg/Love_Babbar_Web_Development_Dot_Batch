// -------------------------------
// External JS File Example
// -------------------------------

// console.log prints output in the console
console.log("External JS");  // Uncomment to check external JS linking


// -------------------------------
// Example with var
// -------------------------------
console.log("Var");

// var → function/global scope, allows redeclare & reassign
var a = 20;
console.log(a);        // 20

a = 10;
console.log(a);        // 10

{
    var b = 30;        // not block-scoped
}
console.log(b);        // 30


// -------------------------------
// Example with let
// -------------------------------
console.log("let");

// let → block scope, can reassign but not redeclare
let c = 20;
console.log(c);        // 20

c = 30;
console.log(c);        // 30

{
    let ba = 40;       // only inside this block
    console.log("ba:", ba); // ba: 40
}

{
    let bb = 40;
}
// ReferenceError: bb is not defined
console.log("bb:", bb); 


// -------------------------------
// Example with const
// -------------------------------
console.log("const");

// const → block scope, no redeclare/reassign, must be initialized
const d = 10;
console.log(d);        // 10

d = 20;                // ❌ Error
console.log(d);        // won’t run
