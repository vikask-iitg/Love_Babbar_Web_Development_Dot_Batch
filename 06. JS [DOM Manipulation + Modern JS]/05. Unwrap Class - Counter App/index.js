const countValue = document.querySelector('#counter');

// Adding counter value to body - Method 1: Longer way
// const ele = document.createTextNode(countValue.innerText);
// document.body.appendChild(ele);

// Adding counter value to body - Method 2: Short way
// document.body.appendChild(document.createTextNode(countValue.innerText));

const increment = () => {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
    // const increment = () => (document.getElementById("count").textContent)++;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
    // const decrement = () => (document.getElementById("count").textContent)--;
};