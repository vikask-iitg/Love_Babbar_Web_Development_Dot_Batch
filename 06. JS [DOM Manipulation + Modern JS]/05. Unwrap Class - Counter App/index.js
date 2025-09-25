const countValue = document.querySelector('#counter');
// const ele = document.createTextNode(countValue.innerText);
// document.body.appendChild(ele);
// document.body.appendChild(document.createTextNode(countValue.innerText));

const increment = () => {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};