const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector('.calc-display');




buttons.forEach(button => { button.addEventListener('click', operatorChoice) });

let operator = '';
let operatorChosen = false;
let num1;
let num2;
let num3;
let numString1 = '';
let numString2 = '';


function operatorChoice(e) {
    const opReturn = e.target.innerHTML;

    if (isNaN(opReturn)) {
        operator = e.target.innerHTML;
        operatorChosen = true;


        //addswitch for special operations
        if (e.target.innerHTML = 'C') {
            reset();
        }
    }
    else {
        if ((typeof num1 === 'undefined') && (typeof num2 === 'undefined') && (operatorChosen === false)) {
            num1 = +e.target.innerHTML;
            console.log(num1);
            calcDisplay.innerHTML = num1;
            numString1 = num1.toString();
        } 
        else if (typeof num2 === 'undefined' && operatorChosen === false) {
            console.log(num1)
            console.log(numString1)
            num1 = +e.target.innerHTML;
            let temp = num1.toString();
            numString1 = temp.concat('', numString1);
            calcDisplay.innerHTML = numString1;
        }
        else if ((typeof num1 !== 'undefined') && (typeof num2 === 'undefined')) {
            num2 = +e.target.innerHTML;
            console.log(num2);
            calcDisplay.innerHTML = num2;
        } else {
            console.log('what')
        }
    }
}

function reset() {
    operator = '';
    operatorChosen = false;
    num1 = undefined
    num2 = undefined
    num3 = undefined
    calcDisplay.innerHTML = '|'
    numString1 = '';
    numString2 = '';

}

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





//console.log(operate(`-`, 8, 3));