const digitDecimal = document.querySelector('#decimal')
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
let decimalCheck = false;

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

function updateDisplay(value) {
    currentDisplay.textContent = value;
}

function appendDecimal(operand) {
    if (operand === '') {
        operand = '0';
    }
    operand += '.';
    return operand;
}


// Event listeners

digitDecimal.addEventListener("click", () => {
    if (!decimalCheck) {
        decimalCheck = true;

        if (!operatorConditional) {
            a = appendDecimal(a);
            updateDisplay(a);
        } else {
            b = appendDecimal(b);
            updateDisplay(b);
        } 
    }
});


digitZero.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '0';
        updateDisplay(a);
    } else {
        b += '0';
        updateDisplay(b);
    }
})

digitOne.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '1'; // Append '1' to `a`
        updateDisplay(a); // Update the display with `a`
    } else {
        b += '1'; // Append '1' to `b`
        updateDisplay(b); // Update the display with `b`
    }
});

digitTwo.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '2';
        updateDisplay(a);
    } else {
        b += '2';
        updateDisplay(b);
    }
});

digitThree.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '3';
        updateDisplay(a);
    } else {
        b += '3';
        updateDisplay(b);
    }
});

digitFour.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '4';
        updateDisplay(a);
    } else {
        b += '4';
        updateDisplay(b);
    }
});

digitFive.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '5';
        updateDisplay(a);
    } else {
        b += '5';
        updateDisplay(b);
    }
});

digitSix.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '6';
        updateDisplay(a);
    } else {
        b += '6';
        updateDisplay(b);
    }
});

digitSeven.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '7';
        updateDisplay(a);
    } else {
        b += '7';
        updateDisplay(b);
    }
});

digitEight.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '8';
        updateDisplay(a);
    } else {
        b += '8';
        updateDisplay(b);
    }
});

digitNine.addEventListener("click", () => {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += '9';
        updateDisplay(a);
    } else {
        b += '9';
        updateDisplay(b);
    }
});

// operators
plusSign.addEventListener("click", () => {
    decimalCheck = false;
    operatorConditional = true;
    operator = '+';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

subtractSign.addEventListener("click", () => {
    decimalCheck = true;
    operatorConditional = true;
    operator = '-';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

multiplySign.addEventListener("click", () => {
    decimalCheck = true;
    operatorConditional = true;
    operator = '×';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

divideSign.addEventListener("click", () => {
    decimalCheck = true;
    operatorConditional = true;
    operator = '÷';
    lastDisplay.textContent = `${a} ${operator}`;
    currentDisplay.textContent = '';
});

equalSign.addEventListener("click", () => {
    a = parseFloat(a); // Convert a to a number if it exists
    b = parseFloat(b); // Convert b to a number if it exists
    operate(operator, a, b); // Call operate() when operator is selected

    if (result === undefined) {
        currentDisplay.textContent = ''
    } else if (result === Infinity) {
        lastDisplay.textContent = `${a} ${operator} ${b} =`;
        currentDisplay.textContent = 'I̸͖̚ ̶̺̈́a̷̡̕m̵͈͆ ̷͉̇ǐ̶͍n̵͇̈́ŝ̸̞i̵͚͆d̶̫͋e̴̳̿ ̵͔͒ỹ̴̭o̸̟͑u̷͙͑r̸̤͌ ̵̫͗w̷ä̸͍ļ̶̄l̴̡̋s̸̩͒.̶͚͗'
        b = '';
    } else {
        console.log(result);
        lastDisplay.textContent = `${a} ${operator} ${b} =`;
        currentDisplay.textContent = result;
        operatorConditional = false;
        decimalCheck = false;
        a = result;
        b = '';
    }
});
