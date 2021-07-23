const mainDiv = document.querySelector('#calc-container');
const output = document.querySelector('#results');
const calcBtns = document.querySelectorAll('.calc');
const display = document.querySelector('.test');
const clear = document.querySelector('.clear');

const add = (a, b) => output.textContent = a + b;

const subtract = (a, b) => output.textContent = a - b;

const multiply = (a, b) => output.textContent = a * b;

const  divide = (a, b) => output.textContent = a / b;

const operator = (a, b) => {
    op = prompt('add | subtract | multi | divide :  ')
    opLow = op.toLowerCase();
    if(opLow == 'add') {
        return add(a, b);
    } else if(opLow == 'subtract') {
        return subtract(a, b);
    } else if(opLow == 'multi') {
        return multiply(a, b);
    } else if(opLow == 'divide') {
        return divide(a, b);
    } else {
        return alert(`Make sure you spell your input correctly!`)
    }
};

// Event listener for buttons to return a value upon click while sending it to a function which displays it
calcBtns.forEach(function(div) {
    div.addEventListener('click', function() {
        displayValue(this.textContent);
    });
});

// Clear Button functionality
clear.addEventListener('click', () => {
        display.innerHTML = '';
});

// Displaying input from buttons
let displayValue = (value) => {
        display.innerHTML += value;
};