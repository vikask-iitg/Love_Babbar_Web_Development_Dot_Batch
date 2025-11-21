// 1. Write a function to change the text of a 
// button on the click event.

// const button = document.querySelector("button");
// function changeButtonText() {


//     if(button.textContent === "Click Me")
//     {
//         button.textContent = "Clicked";
//     }
//     else
//     {
//         button.textContent = "Click Me";
//     }
// }

// button.addEventListener("click", changeButtonText)

// 2. Write a function to add a CSS class to an element on 
// the mouseover event.
// console.log("JS loaded!");
// function addClassOnMouseOver(elementID, className) {
//     const element = document.getElementById(elementID);
//     element.addEventListener("mouseover", () => {
//         element.classList.add(className);
//     });
//     element.addEventListener("mouseout", () => {
//         element.classList.remove(className);
//     });
// }
// addClassOnMouseOver("hoverButton", "active");


// 3. Write a function to remove a CSS class from
// an element on scroll event.

// function removeClassOnMouseOver(elementID, className)
// {
//     const element = document.getElementById(elementID);
//     element.addEventListener("mouseover", () => {
//         element.classList.remove(className);
//     })
// }

// removeClassOnMouseOver("hoverButton", "active");

// 4. Write a function to toggle the display of a 
// div element on click event.

// function toggleDisplayStyle(elementID)
// {
//     const element = document.getElementById(elementID);
//     element.addEventListener("click", () => {
//         if(element.style.display = "block")
//         {
//             element.style.display = "inline";
//         }
//         else
//         {
//             element.style.display = "block";
//         }
//     })
// }

// toggleDisplayStyle("hoverButton");


// 5. Write a function to validate a form on submit event.

// function validateForm(event) {
//     event.preventDefault();
//     const form = event.target;
//     let isValid = true;

//     for (let i = 0; i < form.elements.length; i++) {
//         const input = form.elements[i];
//         const value = input.value.trim();

//         if (input.hasAttribute("required") && value == "") {
//             isValid = false;
//             input.classList.add("invalid");
//         } else {
//             input.classList.remove("invalid");
//         }
//     }

//     const message = document.getElementById("message");
//     if (isValid) {
//         message.classList.remove("error");
//         message.innerText = "Form submitted successfully!";
//     }
//     else {
//         message.classList.add("error");
//         message.innerText = "Please fill out all required fields.";
//     }

// }

// const form = document.getElementById("myForm");
// form.addEventListener("submit", validateForm);

