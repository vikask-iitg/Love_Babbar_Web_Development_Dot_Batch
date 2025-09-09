// -------------------------------
// Constructor Function
// -------------------------------

// A constructor function is used with 'new' keyword to create objects
function Employee(name, age, colony, street) {
    // 'this' refers to the new object being created
    this.name = name;   // property
    this.age = age;     // property
    this.address = {    // nested object (address)
        street,         // shorthand for street: street
        colony,         // shorthand for colony: colony
    };
}

// Create a new Employee object using 'new'
let emp1 = new Employee("Vikas Khurendra", 28, "ABC", "XYZ");

// Access properties
console.log(emp1.name);           // Vikas Khurendra
console.log(emp1.address.colony); // Mujalgondi
