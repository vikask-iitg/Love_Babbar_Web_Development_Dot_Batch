// -------------------------------
// Add and Delete Property in Object
// -------------------------------

// Factory function to create a rectangle object
function Rectangle(length, breadth) {
    const rectangle = {
        length,   // property shorthand
        breadth,  // property shorthand

        // method
        draw: function () {
            console.log("Drawing Rectangle");
        },
    };
    return rectangle;
}

// Create object
let rectangle1 = Rectangle(10, 20);

// -------------------------------
// Add property to object
// -------------------------------
// Adding 'area' property dynamically
rectangle1.area = rectangle1.length * rectangle1.breadth;

console.log(rectangle1.length);   // 10
console.log(rectangle1.breadth);  // 20
console.log(rectangle1.area);     // 200
console.log(rectangle1);          // {length:10, breadth:20, draw:ƒ, area:200}


// -------------------------------
// Delete property from object
// -------------------------------
delete rectangle1.area;           // remove 'area' property
console.log(rectangle1);          // {length:10, breadth:20, draw:ƒ}
