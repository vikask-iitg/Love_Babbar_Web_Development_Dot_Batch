// -------------------------------
// for...in loop
// -------------------------------

// Object with nested object
const Employee = {
    myName: "NameOfEmployee",
    age: 15,

    address: {
        street: 101,
        colony: "ABC",
        district: "XYZ",
    }
};

// Loop through main Employee object
for (let key in Employee) {
    console.log(key, Employee[key]);
    // prints property names (keys) and their values
}

// Loop through nested address object
for (let key in Employee.address) {
    console.log(key, Employee.address[key]);
}

// When do we use for-in?
// Ans : for-in is used to iterate over the keys (property names) of an object.
