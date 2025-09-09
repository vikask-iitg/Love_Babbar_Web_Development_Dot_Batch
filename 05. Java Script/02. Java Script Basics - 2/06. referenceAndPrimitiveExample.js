// -------------------------------
// Primitive Types (Copied by Value)
// -------------------------------

let a = 10;   // primitive type (number)
let b = a;    // copy of 'a' is stored in 'b'

a++;          // increment 'a' (a = 11)
console.log(a); // 11
console.log(b); // 10 (unchanged, since primitives are copied by value)


// -------------------------------
// Reference Types (Copied by Reference)
// -------------------------------

let c = { value: 10 }; // object stored in memory
let d = c;             // 'd' points to the same object reference

c.value++;             // change value using 'c'
console.log(c.value);  // 11
console.log(d.value);  // 11 (same object, so both reflect change)
