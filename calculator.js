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
    console.log(b)
    if (b === 0) {
        return "Cannot divide by zero!"
    }
    else 
        quotient = (a/b).toFixed(2);
        return +quotient;
}

function operate(operator, num1, num2) {
    if (operator === `+`) {
        return add(num1,num2)
    }
}

//console.log(operate(`+`, 1, 2));