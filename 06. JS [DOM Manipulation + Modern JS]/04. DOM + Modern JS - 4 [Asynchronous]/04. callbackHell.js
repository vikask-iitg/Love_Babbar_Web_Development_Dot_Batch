// ---------------------------------
// Callback Hell Example: Making Tea
// ---------------------------------

// The phenomemon which happens when we nest multiple
// callbacks within a funciton is called a callback hell


// call back Hell / Pyramid of Doom understanding tea recipe

// step1 - take a milk 
// step2 - turn on the gas
// step3 - add tea leaf
// step4 - add sugar
// step5 - boil tea
// step6 - filter and serve

// Simulated async steps using setTimeout
function getMilk(callback) {
    setTimeout(() => {
        console.log("Step 1: Got Milk 🥛");
        callback("milk");
    }, 1000);
}

function turnOnGas(milk, callback) {
    setTimeout(() => {
        console.log("Step 2: Gas is On 🔥 with", milk);
        callback();
    }, 1000);
}

function addIngredient(teaLeaf, sugar, callback) {
    setTimeout(() => {
        console.log(`Step 3: Added ${teaLeaf} 🍃 and ${sugar} 🍬`);
        callback();
    }, 1000);
}

function boil(callback) {
    setTimeout(() => {
        console.log("Step 4: Tea is Boiling ☕");
        callback();
    }, 1000);
}

function filterTea(tea, callback) {
    setTimeout(() => {
        console.log("Step 5: Tea Filtered & Ready 🍵");
        callback("Delicious Tea");
    }, 1000);
}

// ------------------------------
// Callback Hell (Pyramid of Doom)
// ------------------------------
const makeTea = nextStep => {
    getMilk(function (milk) {
        turnOnGas(milk, function () {
            addIngredient("teaLeaf", "sugar", function () {
                boil(function () {
                    filterTea("tea", function (readyTea) {
                        nextStep(readyTea);
                    });
                });
            });
        });
    });
};

// Run the tea making process
makeTea(function (finalTea) {
    console.log("✅ Tea is Ready:", finalTea);
});
