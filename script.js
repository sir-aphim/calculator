const digitOne = document.querySelector('#one')
const digitTwo = document.querySelector('#two')
const digitThree = document.querySelector('#three')

const plusSign = document.querySelector('#plus')
const subtractSign = document.querySelector('#subtract')
const equalSign = document.querySelector('#equals') 

let a;
let b;
let operator;

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}


digitOne.addEventListener("click", () => {
    
});

digitTwo.addEventListener("click", () => {

});

plusSign.addEventListener("click", () => {

});

subtractSign.addEventListener("click", () => {
   
})

equalSign.addEventListener("click", () => {
    console.log(operate(a, b));
})