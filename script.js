const digitZero = document.querySelector('#zero');
const digitOne = document.querySelector('#one');
const digitTwo = document.querySelector('#two');
const digitThree = document.querySelector('#three');
const digitFour = document.querySelector('#four');
const digitFive = document.querySelector('#five');
const digitSix = document.querySelector('#six');
const digitSeven = document.querySelector('#seven');
const digitEight = document.querySelector('#eight');
const digitNine = document.querySelector('#nine');


const plusSign = document.querySelector('#plus')
const subtractSign = document.querySelector('#subtract')
const multiplySign = document.querySelector('#multiply')
const divideSign = document.querySelector('#divide')
const equalSign = document.querySelector('#equals')

const currentDisplay = document.querySelector('#currentOperationScreen')
const lastDisplay = document.querySelector('#lastOperationScreen')

// Variable declarations
let a = '';
let b = '';
let operator;
let result;
let operatorConditional = false;

// Function definitions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator === '+') {
        result = add(a, b);
    } else if (operator === '-') {
        result = subtract(a, b)
    } else if (operator === '×') {
        result = multiply(a, b)
    } else if (operator === '÷') {
        result = divide(a, b)
    }
}

// Event listeners
digitZero.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '0';
        updateDisplay(a);
    } else {
        b += '0';
        updateDisplay(b);
    }
})

digitOne.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '1'; // Append '1' to `a`
        updateDisplay(a); // Update the display with `a`
    } else {
        b += '1'; // Append '1' to `b`
        updateDisplay(b); // Update the display with `b`
    }
});

digitTwo.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '2';
        updateDisplay(a);
    } else {
        b += '2';
        updateDisplay(b);
    }
});

digitThree.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '3';
        updateDisplay(a);
    } else {
        b += '3';
        updateDisplay(b);
    }
});

digitFour.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '4';
        updateDisplay(a);
    } else {
        b += '4';
        updateDisplay(b);
    }
});

digitFive.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '5';
        updateDisplay(a);
    } else {
        b += '5';
        updateDisplay(b);
    }
});

digitSix.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '6';
        updateDisplay(a);
    } else {
        b += '6';
        updateDisplay(b);
    }
});

digitSeven.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '7';
        updateDisplay(a);
    } else {
        b += '7';
        updateDisplay(b);
    }
});

digitEight.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '8';
        updateDisplay(a);
    } else {
        b += '8';
        updateDisplay(b);
    }
});

digitNine.addEventListener("click", () => {
    if (!operatorConditional) {
        a += '9';
        updateDisplay(a);
    } else {
        b += '9';
        updateDisplay(b);
    }
});

// operators
plusSign.addEventListener("click", () => {
    operatorConditional = true;
    operator = '+';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

subtractSign.addEventListener("click", () => {
    operatorConditional = true;
    operator = '-';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

multiplySign.addEventListener("click", () => {
    operatorConditional = true;
    operator = '×';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

divideSign.addEventListener("click", () => {
    operatorConditional = true;
    operator = '÷';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

equalSign.addEventListener("click", () => {
    if (a === '' || b === '') {
        currentDisplay.textContent = ''
    } else if (a / '0') { 
        lastDisplay.textContent = `${a} ${operator} ${b} =`;
        currentDisplay.textContent = 'Uh...'
        b = '';
    } else {
        a = parseInt(a); // Convert a to a number if it exists
        b = parseInt(b); // Convert b to a number if it exists
        operate(operator, a, b); // Call operate() when operator is selected
        console.log(result);
        lastDisplay.textContent = `${a} ${operator} ${b} =`;
        currentDisplay.textContent = result;
        operatorConditional = false;
        a = result;
        b = '';
    }
});

// Function to update the display with the current sum
function updateDisplay(value) {
    currentDisplay.textContent = value;
}
