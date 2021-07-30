const mainDiv = document.querySelector('#calc-container');
const operators = document.querySelectorAll('.op');
const numberBtns = document.querySelectorAll('.calcBtn');
const display = document.querySelector('.display-value');
const historyDisplay = document.querySelector('.history');
const clear = document.querySelector('.clear');
const equalSign = document.querySelector('.equals');
const resultContainer = document.querySelector('.results');
let firstNum = 0;
let secondNum = 0;
let resultPair = 0;
let result = 0;
let firstEvalCheck = 0;
let opClicked = 0;
let firstNumOp = 0;
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
        historyDisplay.textContent = '';
        resultContainer.textContent = '';
        firstNum = 0;
        secondNum = 0;
        resultPair = 0;
        result = 0;
        firstEvalCheck = 0;
        opClicked = 0;
        firstNumOp = 0;
        numArr = [];
        opArr = [];
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
        if(opClicked == '0' && firstNumOp == '0') {
            opArr.push(op.textContent);
            numArr.push(display.textContent);
            historyDisplay.textContent += display.textContent + op.textContent;
            display.textContent = '0';
            firstNumOp = 1;
            opClicked = 1;
            console.log(opArr, numArr);
        } else if(opClicked =='0' && firstNumOp == '1') {
            opArr.push(op.textContent);
            numArr.push(display.textContent);
            historyDisplay.textContent += display.textContent + op.textContent;
            display.textContent = '0';
            equalSign.click();
            opClicked = 1;
            console.log(opArr, numArr);
        }
    })
});

// Equals function or Evalution phase
// Complete calculator calculating function
equalSign.addEventListener('click', () => {
    if(numArr[0] == undefined) {
        numArr.push(display.textContent);
        equalSign.click();
    } else if(numArr[0] == '0' || numArr[1] == undefined && display.textContent == '0' && result == '0') {
        alert('I don\'t think so!!');
        clear.click();
    } else {
        while(numArr.length >= 1) {
            if(firstEvalCheck == '0') {
                firstNum = numArr.shift();
                secondNum = numArr.shift();
                if(opArr[0] == ' + ') {
                    console.log(+firstNum + +secondNum);
                    result = (+firstNum + +secondNum);
    
                } else if(opArr[0] == ' - ') {
                    console.log(+firstNum - +secondNum);  
                    result = (+firstNum - +secondNum);
    
                } else if(opArr[0] == ' * ') {
                    console.log(+firstNum * +secondNum);    
                    result = (+firstNum * +secondNum);
    
                } else {
                    console.log(+firstNum / +secondNum);     
                    result = (+firstNum / +secondNum);
                }
                ++firstEvalCheck;
                opArr.shift();
    
            } else {
                resultPair = numArr.shift();
                if(opArr[0] == ' + ') {
                    console.log(result + +resultPair);
                    result += +resultPair;
                    opArr.shift();
                } else if(opArr[0] == ' - ') {
                    console.log(result - +resultPair);  
                    result -= +resultPair;
                    opArr.shift();
                } else if(opArr[0] == ' * ') {
                    console.log(result * +resultPair);  
                    result *= +resultPair;  
                    opArr.shift();
                } else if(opArr[0] == ' / ') {
                    console.log(result / +resultPair);   
                    result /= +resultPair;  
                    opArr.shift();
                } else if(numArr[0] == 'undefined') {
                    return;
                }
            }
        }
        resultContainer.textContent = `${result}`;
    }
});

// testing git push