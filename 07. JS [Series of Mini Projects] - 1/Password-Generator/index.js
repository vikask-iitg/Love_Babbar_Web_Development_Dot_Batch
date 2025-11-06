const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

// set strength indicator color to gray
setIndicator("#ccc");

// Set Password Length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // or kuch bhi karna hai
    const min = parseInt(inputSlider.min);
    const max = parseInt(inputSlider.max);
    console.log(min);
    console.log(max);
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
    console.log(( (passwordLength - min)*100/(max - min)));
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
    // shadow homework
}

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRandInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRandInteger(65, 92));
}

function generateSymbol() {
    const randNum = getRandInteger(0, symbols.length);
    return symbols[randNum];
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && (passwordLength >= 6)) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied"
    } catch (e) {
        copyMsg.innerText = "Failed"
    }
    // to make copy span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function shufflePassword(array) {
    // Fisher yates method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    });

    // special condtion
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value)
        copyContent();
})


generateBtn.addEventListener('click', () => {
    // none of the checkbox are selected
    console.log("starting the journey");
    if (checkCount <= 0) return;
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
    // lets start the journey to find new password
    // remove old password

    password = "";

    // lets put the stuff mentined by checkboxes

    // if(uppercaseCheck.checked)
    // {
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked)
    // {
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked)
    // {
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked)
    // {
    //     password += generateSymbol();
    // }

    let funcArr = [];
    if (uppercaseCheck.checked) {
        funcArr.push(generateUpperCase);
    }
    if (lowercaseCheck.checked) {
        funcArr.push(generateLowerCase);
    }
    if (numbersCheck.checked) {
        funcArr.push(generateRandomNumber);
    }
    if (symbolsCheck.checked) {
        funcArr.push(generateSymbol);
    }

    // compulsory addition
    console.log("starting the  compulsory addition");

    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }

    console.log("starting the  remaining addition");
    // remaining addition
    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let randInd = getRandInteger(0, funcArr.length);
        // console.log("ArrayInd" + randInd);
        password += funcArr[randInd]();
    }

    console.log("starting the shufflePassword");
    // suffle the password
    password = shufflePassword(Array.from(password));

    console.log("starting the UI");
    // show in UI
    passwordDisplay.value = password;

    console.log("starting the calcStrength");
    // calculate strength
    calcStrength();
})