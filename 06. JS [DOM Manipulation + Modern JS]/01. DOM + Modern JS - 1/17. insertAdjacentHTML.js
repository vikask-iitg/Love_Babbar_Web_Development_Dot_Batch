// ------------------------------------------
// # inserting at the beforebegin and beforeend
// ------------------------------------------

let parent = document.querySelector("#list");

// #1 - insertAdjacentElement('beforeend')

// Creates a new <li> element
let child1 = document.createElement('li');
let content1 = document.createTextNode("Text Before End");
child1.appendChild(content1);

// Inserts the <li> as the last child inside <ul id="list">
parent.insertAdjacentElement('beforeend', child1);

// #2 - insertAdjacentElement('beforebegin')

// Creates another new <li> element
let child2 = document.createElement('li');
let content2 = document.createTextNode("Text Before Begin");
child2.appendChild(content2);

// Inserts the <li> before the <ul id="list"> itself
parent.insertAdjacentElement('beforebegin', child2);
