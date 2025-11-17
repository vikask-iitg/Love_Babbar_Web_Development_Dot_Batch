// Write a function to change the text of a 
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

// Write a function to add a CSS class to an element on 
// the mouseover event.
console.log("JS loaded!");
function addClassOnMouseOver(elementID, className)
{
    const element = document.getElementById(elementID);
    element.addEventListener("mouseover", () => {
        element.classList.add(className);
    });
}

addClassOnMouseOver("hoverButton", "active");