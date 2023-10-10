let firstNum = 0;
let secondNum = 0;
let operator = "+";

function operate(firstNum, operator, secondNum) {
    let solution = 0;
    console.log("operator", operator);
    switch(operator) {
        case "+":
            setInputNumber(add(firstNum, secondNum));
            break;
        case "-":
            setInputNumber(subtract(firstNum, secondNum));
            break;
        case "*":
            setInputNumber(multiply(firstNum, secondNum));
            break;
        case "/":
            setInputNumber(divide(firstNum, secondNum));
            break;
        default:
            console.log("err");
    }
    return solution;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let placeholderFlag = true;

function getInputNumber() {
    let input = document.querySelector(".input-number");
    return input.textContent;
}

function setInputNumber(num) {
    let input = document.querySelector(".input-number");
    input.textContent = num;
}

function DisplayInput(number) {
    let inputNum = 0;
    let input = document.querySelector(".input-number");
    if(placeholderFlag) {
        input.textContent = "";
        placeholderFlag = false;
    }
    input.textContent += number;
    console.log(input);
}

let numbers = document.querySelectorAll(".number");
numbers.forEach(num => {
    num.addEventListener("click", (e) =>{ 
        DisplayInput(e.target.textContent);
    })
});

function Clear() {
    let input = document.querySelector(".input-number");
    input.textContent = "0";
    placeholderFlag = true;
}

let clear = document.querySelector(".clearBtn");
clear.addEventListener("click", () => Clear());



// get the input before operation call
let operation = document.querySelectorAll(".operation");
operation.forEach(operation => {
    operation.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        console.log(getInputNumber());
        // store operator and input number
        firstNum = getInputNumber();
        operator = e.target.textContent;
        // then clear input
        Clear();
    })
});

let equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", () => {
    console.log(firstNum, operator, getInputNumber());
    secondNum = getInputNumber();
    operate(Number(firstNum), operator, Number(secondNum));
    placeholderFlag = true;
});

