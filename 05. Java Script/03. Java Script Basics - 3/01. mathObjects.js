// -------------------------------
// Math Object in JavaScript
// -------------------------------

// ---------- Properties ----------

// #1 - Euler's Number (base of natural logarithms, ~2.718)
console.log("Euler Number:", Math.E);

// #2 - Pi (ratio of circumference to diameter, ~3.14159)
console.log("Pi:", Math.PI);

// #3 - log2(e) (base-2 logarithm of Euler's number)
console.log("Log2E:", Math.LOG2E);


// ---------- Methods ----------

// #1 - round(): rounds to nearest integer
console.log("Round:", Math.round(12.79)); // 13
console.log("Round:", Math.round(12.49)); // 12

// #2 - ceil(): rounds UP to nearest integer
console.log("Math Ceil:", Math.ceil(12.79)); // 13

// #3 - floor(): rounds DOWN to nearest integer
console.log("Math Floor:", Math.floor(12.79)); // 12

// #4 - random(): generates a pseudo-random number (0 ≤ x < 1)
console.log("Random Function:", Math.random());

// #5 - min(): returns the smallest value
console.log("Min Value:", Math.min(10, 12)); // 10

// #6 - max(): returns the largest value
console.log("Max Value:", Math.max(10, 12)); // 12

// #7 - pow(x, y): returns x raised to the power y
console.log("Pow:", Math.pow(2, 3)); // 8


// ---------- Custom Example ----------
// Generate a random integer between two bounds
// Lower Bound = 40, Upper Bound = 100

// Step 1: Math.random() -> number between 0 and 1
// Step 2: Multiply by (upper - lower) -> range width
// Step 3: Round result -> integer
// Step 4: Add lower bound to shift into range
console.log("Random No in Bound:", Math.round(Math.random() * (100 - 40)) + 40);
