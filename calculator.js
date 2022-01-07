// TODO: 
// -rewrite this mofo




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

function reset() {
    operator = '';
    numberMove = false;
    first = 0;
    second = undefined;
    numString1 = '';
    numString2 = '';
    calcDisplay.innerHTML = "|";
    console.clear();
}

let operator = '';
let numberMove = false;
let first = 0;
let second;
let result;
let numString1 = '';
let numString2 = '';



/// on operator click (rewrite operatorselect function)
// 1. If first undefined, nothing. (user clicks operator before selecting any number)
// 2. Get number. If second is undefined, move first to second.
// 3. Get number. Save 'second' to temp. Perform operation with input as 'first' and using temp variable and save result to second.





function operatorSelect(e) {
    operator = e.target.innerHTML;

    

    //need case for numbermove false and secone not undefiend?

        //second has been declared perhaps move calculation to herE?

    //1first and second values have been entered
    if (numberMove === true && second !== undefined) {
        console.log("case 1 begin - first is " + first + " " + " - second is " + second)
        let temp;
        temp = operate(operator,first,second);
        console.log('first: ' + temp)
        calcDisplay.innerHTML = temp;
        second = temp;
        numberMove = false;
        numString1 = '';
        console.log("case 1 end - first is " + first + " " + " - second is " + second)
        
    }
    
    else if (numberMove === false && second !== undefined) {
        console.log("case 1.5 - first is " + first + " " + " - second is " + second)
        let temp;
        temp = operate(operator,first,second);
        console.log('first: ' + temp)
        calcDisplay.innerHTML = temp;
        second = temp;
        numString2 = '';
        console.log("case 1.5 end - first is " + first + " " + " - second is " + second)
        numberMove=true;
    }

    //2no values entered yet, person clicks operator
    else if (numberMove === false && second === undefined && first === 0) {
        console.log('case 2')
    }

    //3first value entered, no second value yet. 
    else if (numberMove === false && second === undefined) {
        console.log('case 3')
        numberMove = true;
        console.log("case 3 end - first is " + first + " " + " - second is " + second)

        //second has been declared perhaps move calculation to herE?
    }

    //4first and second values previously calculated

    else {
        console.log('case 4')
    }

    console.log("Display:" + calcDisplay.innerHTML)
}

function getNumbers(e) {

    if (numString1.length < 9 && numberMove === false) {
        first = +e.target.innerHTML;
        let temp = first.toString();
        numString1 = temp.concat('', numString1);
        calcDisplay.innerHTML = numString1;
        first = parseFloat(numString1)
        console.log(first)
        console.log("GET THE NUMBERS 1 - first is " + first + " " + " - second is " + second)
        // numberMove = true; // probably need to move to function that handles operator buttons
    } 
    else if (numString2.length < 9 && numberMove === true) {
        second = +e.target.innerHTML;
        let temp = second.toString();
        numString2 = temp.concat('', numString2);
        calcDisplay.innerHTML = numString2;
        second = parseFloat(numString2)
        console.log(second)
        console.log("GET THE NUMBERS 2 - first is " + first + " " + " - second is " + second)
        // numberMove = false;
    }
    else {
        console.log('here')
    }
}

function onClicker(e) {
    console.log(e.target.innerHTML);
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