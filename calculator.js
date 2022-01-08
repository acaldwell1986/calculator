// TODO: 
// -rewrite this mofo




const numButtons = document.querySelectorAll('button.number-button');
const operatorButtons = document.querySelectorAll('button.operator-button');
const specialButtons = document.querySelectorAll('button.special-button');
const clearButton = document.querySelectorAll('button.clear-button')
const equalButton = document.querySelector('button.equal-button')
const decimalButton = document.querySelector('button.decimal-button')
const calcDisplay = document.querySelector('div.calc-display');
//decimalButton.addEventListener('click', decimalApply);
numButtons.forEach(button => { button.addEventListener('click', getNumber) });

operatorButtons.forEach(button => { button.addEventListener('click', operatorSelect) });

specialButtons.forEach(button => { button.addEventListener('click', specialApply) });

clearButton.forEach(button => { button.addEventListener('click', reset) });
equalButton.addEventListener('click', equal);
//decimalButton.addEventListener('click', decimalApply);

function specialApply(e) {
    if (e.target.innerHTML = '%') {
        let display = document.getElementById('display')
        console.log(display.innerHTML)
    //     if (first === undefined) {
    //         console.log('do nothing yet')
    //     } 
    //     else if (first !== undefined && second === undefined) {
    //         first = first /100;
    //         calcDisplay.innerHTML = first;
    //         console.log(first)
    //     }
    //     else if (first !== undefined && second !== undefined) {
    //         second = second / 100;
    //         calcDisplay.innerHTML = second;
    //         console.log(second);
    //     }
    }
    // else if (e.target.innerHTML = '-/+') {
    //     if (first === undefined)
    // }
}

function reset() {
    operator = '';
    numberMove = false;
    first = undefined;
    second = undefined;
    numString = '';
    calcDisplay.innerHTML = "|";
    console.clear();
}

let operator = '';
let numberMove = false;
let first;
let second;
let numString = '';


function equal() {
    if (first === undefined) {
        console.log('equal - nothing input yet');
    } else if (first !== undefined && second === undefined) {
        console.log('nothing for second value yet');
    } else {
        let temp = second;
        second = operate(operator,first,temp)
        calcDisplay.innerHTML = second;
        numString = '';
        first = undefined;
    }
}

/// on operator click (rewrite operatorselect function)
// 1. If first undefined, nothing. (user clicks operator before selecting any number)
// 2. If second is undefined,Get number. assign input to second. 
// 3.  If second is defined - Get number. Save 'second' to temp. Perform operation with input from getnum as 'first' and 
//     using temp variable and save result to second.

function operatorSelect(e) {
    operator = e.target.innerHTML;

    if (first === undefined) {
        console.log('case1 - nothing')
    }
    else if (second === undefined) {
        console.log('case2');
        second = first;
        numString = '';
        first = undefined;
        console.log("GET THE NUMBERS - first is " + first + " " + " - second is " + second)  

    }
    else if (second !== undefined) {
        console.log('case3');
        let temp = second;
        second = operate(operator,first,temp);
        calcDisplay.innerHTML = second;
        console.log("GET THE NUMBERS - first is " + first + " " + " - second is " + second)  
        numString = '';
        first = undefined;
    }
    else{
        console.log('case4');
    }
}

// get number functino that just returns the users number before any other type of button is clicked

function getNumber(e) {

    if (numString.length < 9) {
        first = +e.target.innerHTML;
        let temp = first.toString();
        numString = temp.concat('', numString);
        calcDisplay.innerHTML = numString;
        first = parseFloat(numString)
        console.log(first)
        console.log(second)
        console.log("GET THE NUMBERS - first is " + first + " " + " - second is " + second)  
    } 

}


// function operatorSelect(e) {
//     operator = e.target.innerHTML;

    

//     //need case for numbermove false and secone not undefiend?

//         //second has been declared perhaps move calculation to herE?

//     //1first and second values have been entered
//     if (numberMove === true && second !== undefined) {
//         console.log("case 1 begin - first is " + first + " " + " - second is " + second)
//         let temp;
//         temp = operate(operator,first,second);
//         console.log('first: ' + temp)
//         calcDisplay.innerHTML = temp;
//         second = temp;
//         numberMove = false;
//         numString = '';
//         console.log("case 1 end - first is " + first + " " + " - second is " + second)
        
//     }
    
//     else if (numberMove === false && second !== undefined) {
//         console.log("case 1.5 - first is " + first + " " + " - second is " + second)
//         let temp;
//         temp = operate(operator,first,second);
//         console.log('first: ' + temp)
//         calcDisplay.innerHTML = temp;
//         second = temp;
//         numString2 = '';
//         console.log("case 1.5 end - first is " + first + " " + " - second is " + second)
//         numberMove=true;
//     }

//     //2no values entered yet, person clicks operator
//     else if (numberMove === false && second === undefined && first === 0) {
//         console.log('case 2')
//     }

//     //3first value entered, no second value yet. 
//     else if (numberMove === false && second === undefined) {
//         console.log('case 3')
//         numberMove = true;
//         console.log("case 3 end - first is " + first + " " + " - second is " + second)

//         //second has been declared perhaps move calculation to herE?
//     }

//     //4first and second values previously calculated

//     else {
//         console.log('case 4')
//     }

//     console.log("Display:" + calcDisplay.innerHTML)
// }

// function getNumbers(e) {

//     if (numString.length < 9 && numberMove === false) {
//         first = +e.target.innerHTML;
//         let temp = first.toString();
//         numString = temp.concat('', numString);
//         calcDisplay.innerHTML = numString;
//         first = parseFloat(numString)
//         console.log(first)
//         console.log("GET THE NUMBERS 1 - first is " + first + " " + " - second is " + second)
//         // numberMove = true; // probably need to move to function that handles operator buttons
//     } 
//     else if (numString2.length < 9 && numberMove === true) {
//         second = +e.target.innerHTML;
//         let temp = second.toString();
//         numString2 = temp.concat('', numString2);
//         calcDisplay.innerHTML = numString2;
//         second = parseFloat(numString2)
//         console.log(second)
//         console.log("GET THE NUMBERS 2 - first is " + first + " " + " - second is " + second)
//         // numberMove = false;
//     }
//     else {
//         console.log('here')
//     }
// }

function onClicker(e) {
    console.log(e.target.innerHTML);
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return b-a;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    let quotient;
    if (a === 0) {
        return "ERR"
        //remove event listeners from all buttons but C
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