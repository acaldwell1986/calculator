


// TODO: 
// -set up seperate listeners for the buttons-
// -rewrite this mofo


// if (operatorChosen !== true) {
//     operator = e.target.innerHTML;
//     operatorChosen = true;
//    }
    
//     //add switch for special operations?
    

// }
// //handles logic for populating the display
// else if (!isNaN(opReturn)){
//     //first pass
//     if ((typeof num1 === 'undefined') && (typeof num2 === 'undefined') && (operatorChosen === false)) {
//         num1 = +e.target.innerHTML;
//         console.log(num1);
//         calcDisplay.innerHTML = num1;
//         numString1 = num1.toString();
//     } 

const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector('div.calc-display');

buttons.forEach(button => { button.addEventListener('click', operatorChoice) });



let operator = '';
let operatorChosen = false;
let num1;
let num2;
let result;
let nextResult; 
let numString1 = '';
let numString2 = '';



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
    console.log(operator, num1, num2)
    switch (operator) {
        case `+`:
            return add(num1,num2)
        case `-`:
            return subtract(num1,num2)
        case `*`:
            return multiply(num1,num2)
        case `x`:
            return multiply(num1,num2)
        case `/`:
            return divide(num1,num2)
        default:
            return `OPERR`
    }
}


//console.log(operate(`-`, 8, 3));