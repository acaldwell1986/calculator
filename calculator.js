// TODO: 
// -finish special function buttons
"use strict";
let firstOperator = undefined;
let secondOperator = undefined;
let first;
let numString = '';
let second;
let result;
let numInput;
let decimalAdded = false; 

const numButtons = document.querySelectorAll('button.number-button');

const operatorButtons = document.querySelectorAll('button.operator-button');
const specialButtons = document.querySelectorAll('button.special-button');
const clearButton = document.querySelectorAll('button.clear-button')
const equalButton = document.querySelector('button.equal-button')
const decimalButton = document.querySelector('button.decimal-button')
const calcDisplay = document.querySelector('div.calc-display');


decimalButton.addEventListener('click', getNumber);
numButtons.forEach(button => { button.addEventListener('click', getNumber) });
operatorButtons.forEach(button => { button.addEventListener('click', operatorSelect) });

specialButtons.forEach(button => { button.addEventListener('click', specialApply) });
clearButton.forEach(button => { button.addEventListener('click', reset) });
equalButton.addEventListener('click', equal);

document.addEventListener('keydown', getNumber);


function specialApply(e) {
    if ((e.target.innerHTML === '%') && numString.length < 9 && ((numInput / 100).toString().length < 9)) {
        
        if (numInput !== undefined && first === undefined) {
            numString = (numInput / 100).toString();
            calcDisplay.innerHTML = numString;
            numInput = parseFloat(numString);
        }
        else if (numInput !== undefined && first !== undefined && firstOperator !== undefined) {
            numString = (numInput / 100).toString();
            calcDisplay.innerHTML = numString;
            numInput = parseFloat(numString);
        }
        else if (numInput === undefined && first !== undefined) {
            numString = (first / 100).toString();
            calcDisplay.innerHTML = numString;
            numInput = parseFloat(numString);
        }
    } 
    else if (e.target.innerHTML === '-/+' && numString.length < 9 && ((numInput / 100).toString().length < 9)) {
               
        if (numInput !== undefined && first === undefined) {
            if (Math.sign(numInput) === 1) {
                numString = (numInput * -1).toString();
                calcDisplay.innerHTML = numString;
                numInput = parseFloat(numString);
            }
            else {
                numString = (numInput * -1);
                calcDisplay.innerHTML = numString;
                numInput = parseFloat(numString);
            }
        }
        else if (numInput !== undefined && first !== undefined && firstOperator !== undefined) {
            if (Math.sign(numInput) === 1) {
                numString = (numInput * -1).toString();
                calcDisplay.innerHTML = numString;
                numInput = parseFloat(numString);
            }
            else {
                numString = (numInput * -1);
                calcDisplay.innerHTML = numString;
                numInput = parseFloat(numString);
            }
            
        }
        else if (numInput === undefined && first !== undefined) {
            debugVar()
            if (Math.sign(numInput) === 1) {
                numString = (first * -1).toString();
                calcDisplay.innerHTML = numString;
                numInput = parseFloat(numString);
            }
            else {
                numString = (first * -1);
                calcDisplay.innerHTML = numString;
                numInput = parseFloat(numString);
            }            
        }
    }  
}
function getNumber(e) {

    if ((e.key === '.' || e.target.innerHTML === '.') && decimalAdded === false && numInput !== undefined) {
        

        if (numString.length < 9 && numInput !== undefined && (e.target.innerHTML === '.' || e.key === '.')) {
            decimalAdded = true;
            numString = numString.concat('', '.')
            calcDisplay.innerHTML = numString; 
            numInput = parseFloat(numString).toFixed(1);
        }
    }

    else if ((e.key === '.' || e.target.innerHTML === '.') && decimalAdded === false && numInput === undefined && first !== undefined && firstOperator !== undefined) {
        
        
}

    else if ((e.key === '.' || e.target.innerHTML === '.') && decimalAdded === false && numInput === undefined && first !== undefined) {
            decimalAdded = true;
            numString = first.toString();
            first = undefined;
            numString = numString.concat('', '.')
            calcDisplay.innerHTML = numString; 
            numInput = parseFloat(numString).toFixed(1);
    }

    else if (decimalAdded === true && numInput === undefined && e.key === '.' || e.target.innerHTML === '.') { 
       
    }

    else if (decimalAdded === true || numInput === undefined) {        

        if (numString.length < 9 && e.key === undefined) {
            numInput = +e.target.innerHTML; 
            let temp = numInput.toString(); 
            numString = numString.concat('', temp); 
            calcDisplay.innerHTML = numString; 
            numInput = parseFloat(numString);
            
        } 

        else if (numString.length < 9 && (/^\d+$/.test(e.key))) {
            numInput = +e.key
            let temp = numInput.toString(); 
            numString = numString.concat('', temp); 
            calcDisplay.innerHTML = numString; 
            numInput = parseFloat(numString) 
        }
        else if (e.key === '-' || e.key === '+' || e.key === '*' || e.key === '/') {
            operatorSelect(e);
        }

        else if (e.key === '=' || e.key === 'Enter') { 
            equal();
        }

        else if (e.key === 'Escape' || e.key === 'C' || e.key === 'c') {
            reset();
        }
    }

    else if (decimalAdded === false || numInput !== undefined) {        

        if (numString.length < 9 && e.key === undefined) {
            numInput = +e.target.innerHTML; 
            let temp = numInput.toString(); 
            numString = numString.concat('', temp); 
            calcDisplay.innerHTML = numString; 
            numInput = parseFloat(numString) 
            
        } 

        else if (numString.length < 9 && (/^\d+$/.test(e.key))) {
            numInput = +e.key
            let temp = numInput.toString(); 
            numString = numString.concat('', temp); 
            calcDisplay.innerHTML = numString; 
            numInput = parseFloat(numString) 
        }
        else if (e.key === '-' || e.key === '+' || e.key === '*' || e.key === '/') {
            operatorSelect(e);
        }

        else if (e.key === '=' || e.key === 'Enter') { 
            equal();
        }

        else if (e.key === 'Escape' || e.key === 'C' || e.key === 'c') {
            reset();
        }
    }
}

function operatorSelect(e) {
    if (e.key === undefined) {

        if (first === undefined && numInput === undefined) {
        }

        else if (first === undefined && firstOperator === undefined && numInput !== undefined ) {
            first = numInput;
            firstOperator = e.target.innerHTML;
            getNumberReset();
            debugVar();
        }

        else if (numInput === undefined && first !== undefined && firstOperator === undefined && second === undefined && secondOperator === undefined && result === undefined) {
            firstOperator = e.target.innerHTML;
            debugVar();
        }

        else if (numInput !== undefined && first !== undefined && firstOperator === undefined && second === undefined && secondOperator === undefined && result === undefined) {
            firstOperator = e.target.innerHTML
            first = numInput;
            getNumberReset();
            debugVar();
        }

        else if (numInput === undefined && second === undefined && secondOperator === undefined && result === undefined && first !== undefined && firstOperator !== undefined) {
            firstOperator = e.target.innerHTML;
        }

        else if (numInput !== undefined && first!== undefined && firstOperator !== undefined && second === undefined && secondOperator === undefined && result === undefined) {
            debugVar();
            second = numInput;
            secondOperator = e.target.innerHTML;
            getNumberReset();
            result = operate(firstOperator, first, second)
            calcDisplay.innerHTML = result;
            debugVar();
            debugVar();
        }

        else if (numInput === undefined && first !== undefined && firstOperator !== undefined && second !== undefined && secondOperator !== undefined && result !== undefined) {
            secondOperator = e.target.innerHTML;
        }

        else if (numInput !== undefined && first !== undefined && firstOperator !== undefined && second  !== undefined && secondOperator !== undefined && result !== undefined) {
            first = result;
            firstOperator = secondOperator;
            second = numInput;
            result = operate(firstOperator, first, second);
            calcDisplay.innerHTML = result;
            first = result;
            firstOperator = e.target.innerHTML;
            getNumberReset();
            result = undefined;
            secondOperator = undefined;
            second  = undefined;
        }
        else {
            debugVar();
        }
    }

    else if (e.key === '-' || e.key === '+' || e.key === '*' || e.key === '/') {
        
        if (first === undefined && numInput === undefined) {
        }

        else if (first === undefined && firstOperator === undefined && numInput !== undefined ) {
            first = numInput;
            firstOperator = e.key;
            getNumberReset();
            debugVar();
        }

        else if (numInput === undefined && first !== undefined && firstOperator === undefined && second === undefined && secondOperator === undefined && result === undefined) {
            firstOperator = e.key;
            debugVar();
        }

        else if (numInput !== undefined && first !== undefined && firstOperator === undefined && second === undefined && secondOperator === undefined && result === undefined) {
            firstOperator = e.key;
            first = numInput;
            getNumberReset();
        }

        else if (numInput === undefined && second === undefined && secondOperator === undefined && result === undefined && first !== undefined && firstOperator !== undefined) {
            firstOperator = e.key;
        }

        else if (numInput !== undefined && first!== undefined && firstOperator !== undefined && second === undefined && secondOperator === undefined && result === undefined) {
            debugVar();
            second = numInput;
            secondOperator = e.key;
            getNumberReset();
            result = operate(firstOperator, first, second)
            calcDisplay.innerHTML = result;
            debugVar();
            debugVar();
        }

        else if (numInput === undefined && first !== undefined && firstOperator !== undefined && second !== undefined && secondOperator !== undefined && result !== undefined) {
            secondOperator = e.key;
        }

        else if (numInput !== undefined && first !== undefined && firstOperator !== undefined && second  !== undefined && secondOperator !== undefined && result !== undefined) {
            first = result;
            firstOperator = secondOperator;
            second = numInput;
            result = operate(firstOperator, first, second);
            calcDisplay.innerHTML = result;
            first = result;
            firstOperator = e.key;
            getNumberReset();
            result = undefined;
            secondOperator = undefined;
            second  = undefined;
        }
        else {
            debugVar();
        }

    }
}

function reset() {
    first = undefined;
    second = undefined;
    numString = '';
    calcDisplay.innerHTML = "|";
    firstOperator = undefined;
    secondOperator = undefined;
    result = undefined;
    console.clear();
    numInput = undefined;
    decimalAdded = false;
    
}

function equal() {
    if (numInput !== undefined && firstOperator !== undefined && second === undefined && secondOperator === undefined && result === undefined) {
        second = numInput;
        debugVar()
        getNumberReset();
        result = operate(firstOperator, first, second);
        calcDisplay.innerHTML = result;
        first = result;
        result = undefined;
        second = undefined;
        firstOperator = undefined;
        debugVar();
    } 
    else if (numInput !== undefined && first !== undefined && second !== undefined && firstOperator !== undefined && secondOperator !== undefined && result !== undefined) {
        first = result; // 27
        firstOperator = secondOperator; //-
        second = numInput; //5
        getNumberReset();
        secondOperator = undefined;
        result = operate(firstOperator, first, second);
        calcDisplay.innerHTML = result;
        first = result;
        result = undefined;
        second = undefined;
        firstOperator = undefined;
        debugVar();
    }
   
    else {
        debugVar();
    }
}

function getNumberReset() {
    numInput = undefined;
    numString = '';
    decimalAdded = false;
}
 
function debugVar() {
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
        reset();
        debugVar();
        return "ERR"
        //remove event listeners from all buttons but C
    }
    else {
        quotient = (a/b)
        return +quotient;
    }
}

function operate(operator, first, second) {
    switch (operator) {
        case `+`:
            return add(first,second)
        case `-`:
            return subtract(first,second)
        case `*`:
            let temp = multiply(first,second).toPrecision(9);
            let temp2 = parseFloat(temp);
            return temp2;
        case `x`:
            let temp3 = multiply(first,second).toPrecision(9);
            let temp4 = parseFloat(temp3);
            return temp4;

        case `/`:
            return divide(first,second)
        default:
            debugVar();
            reset();
            return `OPERR`
            //remove event listeners except C button
    }
}


