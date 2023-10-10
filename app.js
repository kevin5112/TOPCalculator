let firstNum = 0;
let secondNum = 0;
let operator = "+";

function operate(firstNum, secondNum, operator) {
    let solution = 0;
    switch(operator) {
        case "+":
            solution = add(firstNum, secondNum);
            break;
        case "-":
            solution = subtract(firstNum, secondNum);
            break;
        case "*":
            solution = multiply(firstNum, secondNum);
            break;
        case "/":
            solution = divide(firstNum, secondNum);
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
