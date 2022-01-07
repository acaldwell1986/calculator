


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
//     if ((typeof first === 'undefined') && (typeof second === 'undefined') && (operatorChosen === false)) {
//         first = +e.target.innerHTML;
//         console.log(first);
//         calcDisplay.innerHTML = first;
//         numString1 = first.toString();
//     } 

const numButtons = document.querySelectorAll('button.number-button');
const operatorButtons = document.querySelectorAll('button.operator-button');
const specialButtons = document.querySelectorAll('button.special-button');
const clearButton = document.querySelectorAll('button.clear-button')
const equalButton = document.querySelectorAll('button.equal-button')
const decimalButton = document.querySelectorAll('button.decimal-button')

const calcDisplay = document.querySelector('div.calc-display');

numButtons.forEach(button => { button.addEventListener('click', getNumbers) });

operatorButtons.forEach(button => { button.addEventListener('click', operatorSelect) });

specialButtons.forEach(button => { button.addEventListener('click', onClicker) });

clearButton.forEach(button => { button.addEventListener('click', reset) });
equalButton.forEach(button => { button.addEventListener('click', onClicker) });
decimalButton.forEach(button => { button.addEventListener('click', onClicker) });

let operator = '';
let numberMove = false;
let first = 0;
let second;
let numString1 = '';
let numString2 = '';

function operatorSelect(e) {
    operator = e.target.innerHTML;
    
    //first and second values have been previously calculated
    if (numberMove === false && second !== undefined) {

    }
    
    
    //first value entered, no second value yet. 
    else if (numberMove === false && second === undefined) {

    }


    //no values entered yet, person clicks operator
    else if (numberMove === false && second !== undefined && first === 0) {
        
    }
}

function getNumbers(e) {

    if (numString1.length < 9 && numberMove === false) {
        first = +e.target.innerHTML;
        let temp = first.toString();
        numString1 = temp.concat('', numString1);
        calcDisplay.innerHTML = numString1;
        first = parseFloat(numString1)
        console.log(first)
        numberMove = true; // probably need to move to function that handles operator buttons
    } 
    else if (numString2.length < 9 && numberMove === true) {
        second = +e.target.innerHTML;
        let temp = second.toString();
        numString2 = temp.concat('', numString2);
        calcDisplay.innerHTML = numString2;
        second = parseFloat(numString2)
        console.log(second)
        numberMove = false;
    }
    else {
        console.log('here')
    }
}


function onClicker(e) {
    console.log(e.target.innerHTML);
}

function reset() {
    operator = '';
    numberMove = false;
    first = 0;
    second;
    numString1 = '';
    numString2 = '';
    calcDisplay.innerHTML = "|";
    console.clear();
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

function operate(operator, first, second) {
    console.log(operator, first, second)
    switch (operator) {
        case `+`:
            return add(first,second)
        case `-`:
            return subtract(first,second)
        case `*`:
            return multiply(first,second)
        case `x`:
            return multiply(first,second)
        case `/`:
            return divide(first,second)
        default:
            return `OPERR`
    }
}


//console.log(operate(`-`, 8, 3));