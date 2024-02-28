const digitOne = document.querySelector('#one')
const digitTwo = document.querySelector('#two')
const digitThree = document.querySelector('#three')

const plusSign = document.querySelector('#plus')
const subtractSign = document.querySelector('#subtract')
const equalSign = document.querySelector('#equals') 

// Variable declarations
let a;
let b;
let operator;
let result;

// Function definitions
function add(a, b) {
    return a + b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        result = add(a, b);
    }
}

// Event listeners
digitOne.addEventListener("click", () => {
    a = 1;
});

digitTwo.addEventListener("click", () => {
    b = 2;
});

plusSign.addEventListener("click", () => {
    operator = '+';
    
});

equalSign.addEventListener("click", () => {
    a = parseInt(a); // Convert a to a number if it exists
    b = parseInt(b); // Convert b to a number if it exists
    operate(operator, a, b); // Call operate() when operator is selected
    console.log(result);
});
