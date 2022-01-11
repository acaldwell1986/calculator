// TODO: 
// -rewrite this mofo

let firstOperator = undefined;
let secondOperator = undefined;
let first;
let numString = '';
let second;
let result;
let numInput;


const numButtons = document.querySelectorAll('button.number-button');
const operatorButtons = document.querySelectorAll('button.operator-button');
//const specialButtons = document.querySelectorAll('button.special-button');
const clearButton = document.querySelectorAll('button.clear-button')
const equalButton = document.querySelector('button.equal-button')
const decimalButton = document.querySelector('button.decimal-button')
const calcDisplay = document.querySelector('div.calc-display');


//decimalButton.addEventListener('click', decimalApply);
numButtons.forEach(button => { button.addEventListener('click', getNumber) });

operatorButtons.forEach(button => { button.addEventListener('click', operatorSelect) });

//specialButtons.forEach(button => { button.addEventListener('click', specialApply) });

clearButton.forEach(button => { button.addEventListener('click', reset) });
equalButton.addEventListener('click', equal);
//decimalButton.addEventListener('click', decimalApply);


// function specialApply(e) {
//     if (e.target.innerHTML = '%') {
        
//         if (firstActive === true) {
//             console.log('hey1');
//             first = first /100;
//             calcDisplay.innerHTML = first;
//             console.log('FLAG: ' + firstActive);

//         } 
        
//         else if (firstActive === false) {
//             console.log('hey2');
//             second = second/100;
//             calcDisplay.innerHTML = second;
//             console.log('FLAG: ' + firstActive);
//         }

//         else {console.log('hey3');}
//     }
// }


function getNumber(e) {
    if (numString.length < 9) {
        numInput = +e.target.innerHTML; 
        let temp = numInput.toString(); 
        numString = numString.concat('', temp); 
        calcDisplay.innerHTML = numString; 
        numInput = parseFloat(numString) 
        console.log(numString); 
    } 
}

function reset() {
    firstActive = false;
    first = undefined;
    second = undefined;
    numString = '';
    calcDisplay.innerHTML = "|";
    firstOperator = undefined;
    secondOperator = undefined;
    result = undefined;
    console.clear();
}


function equal() {
    if (numInput !== undefined && second === undefined && secondOperator === undefined && result === undefined) {
        second = numInput;
        debugVar()
        getNumberReset();
        result = operate(firstOperator, first, second);
        calcDisplay.innerHTML = result;
        first = result;
        result = undefined;
        second = undefined;
        firstOperator = undefined;
        console.log('here1')
        debugVar()
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
        console.log('here2')
        debugVar();
    }
   
    else {
        console.log(numInput)
        console.log('nothing happens, no equals');
        debugVar();
    }
}

function operatorSelect(e) {
    
    debugVar();
    if (first === undefined && numInput === undefined) {
        console.log('nothing happens, no numinput');
        console.log('Case 1');
    }

    else if (first === undefined && firstOperator === undefined && numInput !== undefined ) {
        first = numInput;
        firstOperator = e.target.innerHTML;
        getNumberReset();
        console.log('Case 2');
        debugVar();
    }

    else if (numInput === undefined && first !== undefined && firstOperator === undefined && second === undefined && secondOperator === undefined && result === undefined) {
        firstOperator = e.target.innerHTML;
        console.log('Case 2b');
        debugVar();
    }

    else if (numInput !== undefined && first !== undefined && firstOperator === undefined && second === undefined && secondOperator === undefined && result === undefined) {
        firstOperator = e.target.innerHTML
        first = numInput;
        getNumberReset();
        console.log('Case 2c');
    }

    else if (numInput === undefined && second === undefined && secondOperator === undefined && result === undefined && first !== undefined && firstOperator !== undefined) {
        firstOperator = e.target.innerHTML;
        console.log('Case 3');
    }

    else if (numInput !== undefined && first!== undefined && firstOperator !== undefined && second === undefined && secondOperator === undefined && result === undefined) {
        debugVar();
        second = numInput;
        secondOperator = e.target.innerHTML;
        getNumberReset();
        result = operate(firstOperator, first, second)
        calcDisplay.innerHTML = result;
        debugVar();
        console.log('Case 4');
        debugVar();
    }

    else if (numInput === undefined && first !== undefined && firstOperator !== undefined && second !== undefined && secondOperator !== undefined && result !== undefined) {
        secondOperator = e.target.innerHTML;
        console.log('Case 5');
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
        console.log('Case 6');
    }
    else {
        console.log('Something happened.');
        debugVar();
    }
}


function getNumberReset() {
    numInput = undefined;
    numString = '';
}
 
function debugVar() {
    console.log('First: ' + first + ' First Operator: ' + firstOperator + ' Second: ' + second + ' Second Operator: ' + secondOperator + ' Result: ' + result);
}

function onClicker(e) {
    console.log(e.target.innerHTML);
}

function main(e) {
    if (num1.toString.length < 10) {
        num1 = +e.target.innerHTML;
        console.log(num1);
        calcDisplay.innerHTML = num1;
        numString1 = num1.toString();
    }
}


function onClicker(e) {
    console.log(e.target.innerHTML);
}





function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    console.log(a)
    console.log(b);
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    let quotient;
    if (b === 0) {
        return "ERR"
        //remove event listeners from all buttons but C
    }
    else {
        quotient = (a/b)
        console.log(quotient)
        return +quotient;
    }
}

function operate(operator, first, second) {
    console.log(operator +  "first: " + first + " second: " + second)
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
            debugVar();
            console.log(numInput)
            return `OPERR`
            //remove event listeners except C button
    }
}


//console.log(operate(`-`, 8, 3));