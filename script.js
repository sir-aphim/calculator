const digitClear = document.querySelector('#clear')
const digitAllClear = document.querySelector('#all-clear')
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

const allDigits = document.querySelectorAll('.digit')
const allSigns = document.querySelectorAll('.sign')

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

function toggleCheckFalse () {
    operatorConditional = false;
    decimalCheck = false;
}

function handleOperatorClick(operatorSymbol) {
    b = '';
    lastDisplay.style.fontSize = "16px"
    decimalCheck = false; // Reset decimal check
    operatorConditional = true; // Set operator conditional
    operator = operatorSymbol; // Set operator
    lastDisplay.textContent = `${a} ${operator}`; // Update last display
    currentDisplay.textContent = ''; // Clear current display
}

function limitCharacter (string) {
    if (string.length > 19) {
        string = string.slice(0, 19);
} 
return string
}

function handleDigitClick (num) {
    if (!operatorConditional) {
        if (typeof a === 'number') {
            a = '';
        }
        a += num; // Append '1' to `a`
        a = limitCharacter(a)
        updateDisplay(a); // Update the display with `a`
    } else {
        b += num; // Append '1' to `b`
        b = limitCharacter(b)
        updateDisplay(b); // Update the display with `b`
    }
};

// Event listeners

allDigits.forEach(digit => {
    // Mouse down event listener
    digit.addEventListener("mousedown", () => {
        // Change background color when clicked
        digit.style.backgroundColor = "#646464"; // Change to whatever color you desire
    });

    // Mouse up event listener
    digit.addEventListener("mouseup", () => {
        // Revert background color to its original color
        digit.style.backgroundColor = "#969696"; // Revert to default (let CSS handle it)
    });
});

allSigns.forEach(digit => {
    // Mouse down event listener
    digit.addEventListener("mousedown", () => {
        // Change background color when clicked
        digit.style.backgroundColor = "#245c77"; // Change to whatever color you desire
    });

    // Mouse up event listener
    digit.addEventListener("mouseup", () => {
        // Revert background color to its original color
        digit.style.backgroundColor = "#327da1"; // Revert to default (let CSS handle it)
    });
});

digitAllClear.addEventListener("click", () => {
    a = "";
    b = "";
    operator = ""
    result = "";
    toggleCheckFalse();
    currentDisplay.textContent = '';
    lastDisplay.textContent = '';
});


digitClear.addEventListener("click", () => {
    if (!operatorConditional) {
        decimalCheck = false;

        a = a.toString();
        a = a.substring(0,a.length-1);
        updateDisplay(a);
    } else {
        decimalCheck = false;

        b = b.toString();
        b = b.substring(0,b.length-1);
        updateDisplay(b);
    }
});

digitDecimal.addEventListener("click", () => {
    if (!decimalCheck) {
        decimalCheck = true;
        
        if (!operatorConditional) {
            if (typeof a === 'number') {
                a = '';
            }
            a = appendDecimal(a);
            updateDisplay(a);
        } else {
            b = appendDecimal(b);
            updateDisplay(b);
        } 
    }
});

digitZero.addEventListener("click", () => { 
    handleDigitClick('0');
});

digitOne.addEventListener("click", () => { 
    handleDigitClick('1');
});

digitTwo.addEventListener("click", () => { 
    handleDigitClick('2');
});

digitThree.addEventListener("click", () => { 
    handleDigitClick('3');
});

digitFour.addEventListener("click", () => { 
    handleDigitClick('4');
});

digitFive.addEventListener("click", () => { 
    handleDigitClick('5');
});

digitSix.addEventListener("click", () => { 
    handleDigitClick('6');
});

digitSeven.addEventListener("click", () => { 
    handleDigitClick('7');
});

digitEight.addEventListener("click", () => { 
    handleDigitClick('8');
});

digitNine.addEventListener("click", () => { 
    handleDigitClick('9');
});

// operators
plusSign.addEventListener("click", () => handleOperatorClick('+'));
subtractSign.addEventListener("click", () => handleOperatorClick('-'));
multiplySign.addEventListener("click", () => handleOperatorClick('×'));
divideSign.addEventListener("click", () => handleOperatorClick('÷'));

equalSign.addEventListener("click", () => {
    a = parseFloat(a); // Convert a to a number if it exists
    b = parseFloat(b); // Convert b to a number if it exists
    operate(operator, a, b); // Call operate() when operator is selected

    if (result === undefined || isNaN(a) || isNaN(b) || isNaN(result)) {
        toggleCheckFalse()
        currentDisplay.textContent = 'No operation.';
        lastDisplay.textContent = '';
        a = '';
        b = ''
    } else if (result === Infinity) {
        toggleCheckFalse()
        lastDisplay.textContent = `${a} ${operator} ${b} =`;
        currentDisplay.textContent = 'I̸a̷̡̕m̵͈͆ǐ̶͍n̵͇̈́ŝ̸̞i̵͚͆d̶̫͋e̴̳̿ỹ̴̭o̸̟͑u̷͙͑r̸̤͌w̷ä̸͍ļ̶̄l̴̡̋s̸̩͒.̶͚͗'
        a = '';
        b = '';
    } else {
        if (`${result}`.length > 10 || `${result}`.length > 10) {
            lastDisplay.style.fontSize = "8px";
        }
        toggleCheckFalse()
        lastDisplay.textContent = `${a} ${operator} ${b} =`;
        currentDisplay.textContent = result.toExponential(6);
        a = result;
        b = '';
    }
});
