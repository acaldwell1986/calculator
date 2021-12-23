function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    let quotient;
    if (b === 0) {
        return "Cannot divide by zero!"
    }
    else 
        quotient = (a/b).toFixed(6);
        return +quotient;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case `+`:
            return add(num1,num2)
        case `-`:
            return subtract(num1,num2)
        case `*`:
            return multiply(num1,num2)
        case `/`:
            return divide(num1,num2)
        default:
            return `Something went wrong.`
    }
}

console.log(operate(`/`, 8, 3));