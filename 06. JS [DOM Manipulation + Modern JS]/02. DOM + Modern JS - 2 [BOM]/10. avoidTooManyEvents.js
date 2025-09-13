// ------------------------------
// Adding Events to Many Elements
// ------------------------------

// ✅ Method 1: Add event listener to EACH element individually

for (let i = 1; i <= 100; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is ${i} paragraph.`;

    // each paragraph gets its own event listener
    paragraph.addEventListener('click', function () {
        alert(`This is ${i} paragraph clicked!`);
    });

    document.body.appendChild(paragraph);
}

// ✅ Method 2: Event Delegation

// Instead of adding 100 listeners, attach ONE listener to parent
// and handle events by checking event.target.
let parentDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = `This is ${i} paragraph`;
    parentDiv.appendChild(paragraph);
}

document.body.appendChild(parentDiv);

// Single listener on parent <div>
parentDiv.addEventListener('click', function (event) {
    if (event.target.nodeName === 'P') { // check if a <p> was clicked
        alert(event.target.textContent);
    }
});


// NOTE: event.target.nodeName Always returns the tag name in uppercase 
// for HTML elements (here 'P').