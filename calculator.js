const buttons = document.querySelectorAll('button');
buttons.forEach(button => { button.addEventListener('click', operatorChoice) });


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
        return "ERR"
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

function operatorChoice(e) {
    const opReturn = e.target.textContent;
    if (isNaN(opReturn)) {
        console.log(opReturn);
    }
    else {
        console.log(+opReturn);
    }
}



console.log(operate(`-`, 8, 3));