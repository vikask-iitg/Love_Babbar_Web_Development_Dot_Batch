// ------------------------------
// Closure Example #2
// ------------------------------

// Outer function → returns a nested function
const outerFunction = () => {

  // First inner function
  const firstLevel = () => {
    let a = 10;
    console.log("Initial value of a in firstLevel:", a); // 10

    // Second inner function
    const secondLevel = () => {
      // If we uncomment `let a = 20;` → this will shadow parent's `a`
      let a = 20;
      console.log("Value of a inside secondLevel:", a);

      // Third inner function
      const thirdLevel = () => {
        // If we uncomment `let a = 30;` → shadows again
        let a = 30;
        console.log("Value of a inside thirdLevel:", a);
      };

      // Call third-level function
      thirdLevel();
    };

    // Re-assign `a` (mutation affects closures down the chain)
    a = 69;

    // Call second-level function
    secondLevel();
  };

  // Return the first inner function
  return firstLevel;
};

// ------------------------------
// Usage
// ------------------------------
let closureDemo = outerFunction();

// Execute the returned function
closureDemo();

// ------------------------------
// Expected Output:
// ------------------------------
// Initial value of a in firstLevel: 10
// Value of a inside secondLevel: 69
// Value of a inside thirdLevel: 69
