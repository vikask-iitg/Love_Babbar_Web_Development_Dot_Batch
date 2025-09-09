// -------------------------------
// Factory Function
// -------------------------------

// A Factory function is a function that returns an object
// Each call creates a new object with its own properties and methods
function createRectangle(length, breadth) {
    const rectangle = {
        length,   // property shorthand (same as length: length)
        breadth,  // property shorthand (same as breadth: breadth)

        // method to draw rectangle
        draw: function () {
            console.log("Drawing Rectangle");
        },

        // method to calculate area
        area: function () {
            console.log(`Area of Rectangle: ${this.length * this.breadth}`);
        }
    };
    return rectangle; // return the object
}

// Create first rectangle object
let rectangle1 = createRectangle(5, 6);
console.log(rectangle1.length);  // 5
rectangle1.area();               // Area of Rectangle: 30

// Create second rectangle object
let rectangle2 = createRectangle(15, 60);
console.log(rectangle2.breadth); // 60
rectangle2.area();               // Area of Rectangle: 900
