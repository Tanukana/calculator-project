const mainDiv = document.querySelector('#calc-container');
const operators = document.querySelectorAll('.op');
const buttons = document.querySelectorAll('.calcBtn');
const display = document.querySelector('.display-value');
const clear = document.querySelector('.clear');
const equalSign = document.querySelector('.equals');
let x = 0;
let y = 0;
let z = 0;
let result = 0;
let arrSplitter = 0;
let numIndex = 0;
let opIndex = 0;
let firstEvalCheck = 0;
let evalArr = [];
let numArr = [];
let opArr = [];

const add = (a, b) => output.textContent = a + b;

const subtract = (a, b) => output.textContent = a - b;

const multiply = (a, b) => output.textContent = a * b;

const  divide = (a, b) => output.textContent = a / b;

// const operator = (a, b) => {
//     op = prompt('add | subtract | multi | divide :  ')
//     opLow = op.toLowerCase();
//     if(opLow == 'add') {
//         return add(a, b);
//     } else if(opLow == 'subtract') {
//         return subtract(a, b);
//     } else if(opLow == 'multi') {
//         return multiply(a, b);
//     } else if(opLow == 'divide') {
//         return divide(a, b);
//     } else {
//         return alert(`Make sure you spell your input correctly!`)
//     }
// };

// Event listener for buttons to return a value upon click while sending it to a function which displays it
buttons.forEach(function(div) {
    div.addEventListener('click', function() {
        displayValue(this.textContent);
    })
});

// Clear Button functionality
clear.addEventListener('click', () => {
        display.textContent = '0';
});

// Displaying input from buttons
let displayValue = (value) => {
    if(display.textContent == "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
};

// Event Listener to store display values in their own arrays
operators.forEach(function(op) {
    op.addEventListener('click', function() {
        evalArr[0] = display.textContent;
        displayValue(this.textContent);
        return console.log(evalArr);
    })
});

// Equals function or Evalution phase
equalSign.addEventListener('click', function() {
    evalArr[0] = display.textContent;
    str = evalArr.toString();
    newArr = str.split(' ');
        for(i = 0; i <= newArr.length - 1; i++) {
            if(arrSplitter == '0') {
                numArr[numIndex] = newArr[i];
                ++numIndex;
                ++arrSplitter;
            } else if(arrSplitter == '1') {
                opArr[opIndex] = newArr[i];
                ++opIndex;
                --arrSplitter;
            }
        }

    console.log(newArr);
    console.log(numArr);
    console.log(opArr);
    operate();

});

// Complete calculator calculating function

let operate = () => {
    while(numArr.length >= 1) {
        if(firstEvalCheck == '0') {
            x = numArr.shift();
            y = numArr.shift();
            if(opArr[0] == '+') {
                console.log(+x + +y);
                result = (+x + +y);

            } else if(opArr[0] == '-') {
                console.log(+x - +y);  
                result = (+x - +y);

            } else if(opArr[0] == '*') {
                console.log(+x * +y);    
                result = (+x * +y);

            } else {
                console.log(+x / +y);     
                result = (+x / +y);

            }

            ++firstEvalCheck;
            opArr.shift();

        } else {
            z = numArr.shift();
            if(opArr[0] == '+') {
                console.log(result + +z);
                result += +z;
                opArr.shift();
            } else if(opArr[0] == '-') {
                console.log(result - +z);  
                result -= +z;
                opArr.shift();
            } else if(opArr[0] == '*') {
                console.log(result * +z);  
                result *= +z;  
                opArr.shift();
            } else {
                console.log(result / +z);   
                result /= +z;  
                opArr.shift();
            }
        }
    }
}