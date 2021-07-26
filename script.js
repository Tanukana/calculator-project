const mainDiv = document.querySelector('#calc-container');
const operators = document.querySelectorAll('.op');
const numberBtns = document.querySelectorAll('.calcBtn');
const display = document.querySelector('.display-value');
const historyDisplay = document.querySelector('.history');
const clear = document.querySelector('.clear');
const equalSign = document.querySelector('.equals');
let x = 0;
let y = 0;
let z = 0;
let result = 0;
let firstEvalCheck = 0;
let opClicked = 0;
let numArr = [];
let opArr = [];

// Event listener for buttons to return a value upon click while sending it to a function which displays it
numberBtns.forEach(function(num) {
    num.addEventListener('click', function() {
        displayValue(this.textContent);
    })
});

// Clear Button functionality
clear.addEventListener('click', () => {
        display.textContent = '0';
});

// Displaying input from buttons
let displayValue = (value) => {
    if(display.textContent == '0') {
        display.textContent = value;
        opClicked = 0;
    } else if(opClicked == '0') {
        display.textContent += value;
    }
};

// Creating operator function which records existing detail at that time and prepares for next inputs
operators.forEach(function(op) {
    op.addEventListener('click', function() {
        if(opClicked == '0') {
        opArr.push(op.textContent);
        numArr.push(display.textContent);
        historyDisplay.textContent += display.textContent + opArr[0];
        display.textContent = '0';
        opClicked = 1;
        console.log(opArr, numArr, opClicked);
        } else {
            return;
        }
    })
});

// Equals function or Evalution phase
// Complete calculator calculating function
equalSign.addEventListener('click', () => {
    numArr.push(display.textContent);
    while(numArr.length >= 1) {
        if(firstEvalCheck == '0') {
            x = numArr.shift();
            y = numArr.shift();
            if(opArr[0] == ' + ') {
                console.log(+x + +y);
                result = (+x + +y);

            } else if(opArr[0] == ' - ') {
                console.log(+x - +y);  
                result = (+x - +y);

            } else if(opArr[0] == ' * ') {
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
            if(opArr[0] == ' + ') {
                console.log(result + +z);
                result += +z;
                opArr.shift();
            } else if(opArr[0] == ' - ') {
                console.log(result - +z);  
                result -= +z;
                opArr.shift();
            } else if(opArr[0] == ' * ') {
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

});