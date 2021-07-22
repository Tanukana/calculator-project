const mainDiv = document.querySelector('#calc-container');
const output = document.querySelector('#results');
const test = document.querySelectorAll('.calc-num');

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

// Testing of adding eventlisteners for multiple elements
test.forEach(function(div) {
    div.addEventListener('click', function() {
        console.log(this.textContent);
    });
});