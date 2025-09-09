// -------------------------------
// Deep Object Cloning
// -------------------------------

// Original object with a nested object
const obj = {
    myName: "Vikas",
    address: {
        city: "ABC",
        state: "XYZ"
    }
};

// Create a deep copy using JSON method
// Step 1: Convert object -> JSON string
// Step 2: Parse JSON string -> new object
const deepCopy = JSON.parse(JSON.stringify(obj));

// Change nested property in the cloned object
deepCopy.address.city = "PQR";

// Original object remains unchanged (deep copy created a true separate copy)
console.log(obj.address.city); // Output: ABC
