const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector('div.calc-display');

buttons.forEach(button => { button.addEventListener('click', operatorChoice) });

let operator = '';
let operatorChosen = false;
let num1;
let num2;
let result;
let nextResult; //not affected by reset
let numString1 = '';
let numString2 = '';

function reset() {
    operator = '';
    operatorChosen = false;
    num1 = undefined;
    num2 = undefined;
    result = undefined;
    nextResult = undefined;
    calcDisplay.innerHTML = '|';
    numString1 = '';
    numString2 = '';
}

function clear() {
    operator = '';
    operatorChosen = false;
    num1 = undefined;
    num2 = undefined;
    result = undefined;
    calcDisplay.innerHTML = '|';
    numString1 = '';
    numString2 = '';
}

function operatorChoice(e) {
    const opReturn = e.target.innerHTML;

    if (e.target.innerHTML === 'C') {
        reset();
    }
    
    //case1 - person selects first num, chooses operator, selects second num, hits equals
    else if (opReturn === '=' && operatorChosen === true && (num1 !== undefined && num2 !== undefined)) {
        console.log('here1 ' + operate(operator, +numString1, +numString2))
        result = operate(operator, +numString1, +numString2);
        let temp = result;
        clear();
        calcDisplay.innerHTML = temp;
        nextResult = temp;
    }

    //case2 first and second num chosen, result not calculated yet
    else if (operatorChosen === true && result === undefined && num2 !== undefined && nextResult === undefined) {
        console.log('here2 ' + operate(operator, +numString1, +numString2))
        result = operate(operator, +numString1, +numString2);
        let temp = result;
        clear();
        calcDisplay.innerHTML = temp;
        nextResult = temp;
    }

    //case3 - nextresult is not undefined so the cycle must be repeatable
    else if (nextResult !== undefined && e.target.innerHTML !== 'C') {
        console.log('here3 ')
        console.log(e.target.innerHTML)


    }

    //case3 - result has been calculated, num1 and num2 must be reset to continue calculations to be used in conjunction with result
    // else if (operatorChosen === true && result === undefined && num2 !== undefined) {
    //     console.log('here3' + operate(operator, +numString1, +numString2))
    //     result = operate(operator, +numString1, +numString2);
    //     calcDisplay.innerHTML = result;
    // }

    //case-end-catchall
    else if (isNaN(opReturn) && opReturn !== '=') {

        //need to do some work on resetting things to keep the loop going and saving the value before reset
     if (operatorChosen !== true) {
        operator = e.target.innerHTML;
        operatorChosen = true;
       }
        
        //add switch for special operations?
        

    }
    //handles logic for populating the display
    else if (!isNaN(opReturn)){
        //first pass
        if ((typeof num1 === 'undefined') && (typeof num2 === 'undefined') && (operatorChosen === false)) {
            num1 = +e.target.innerHTML;
            console.log(num1);
            calcDisplay.innerHTML = num1;
            numString1 = num1.toString();
        } 

        //second pass once more than 1 digit is added
        else if (typeof num2 === 'undefined' && operatorChosen === false && numString1.length < 10) {
            num1 = +e.target.innerHTML;
            let temp = num1.toString();
            numString1 = temp.concat('', numString1);
            calcDisplay.innerHTML = numString1;
        }

        //nothing happens if more than 9 digits are added to first value
        else if (numString1.length >= 10 && operatorChosen === false) {
            //nothing happens
            console.log('what1')
        }
        //first digit added to second value
        else if ((typeof num1 !== 'undefined') && (typeof num2 === 'undefined')) {
            num2 = +e.target.innerHTML;
            console.log(num2);
            calcDisplay.innerHTML = num2;
            numString2 = num2.toString();
        } 

        //additional passes until length reach 10 and equals not chosen
        else if (numString2.length < 10) {
            num2 = +e.target.innerHTML;
            let temp = num2.toString();
            numString2 = temp.concat('', numString2);
            calcDisplay.innerHTML = numString2;
        }
        
        //nothing happens if more than 9 digits are added to second value
        else if (numString2 >= 10) {
            //nothing happens
            console.log('numstring2')
            console.log(num1)
            console.log(num2)
            console.log(numString1)
            console.log(numString2)
        }

        //handles all other cases
        else {
            console.log('HMM')
        }
    }
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