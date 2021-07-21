let mainDiv = document.querySelector('#calc-container');
let output = document.querySelector('#results');

let add = (a, b) => output.textContent = a + b;

let subtract = (a, b) => output.textContent = a - b;

let multiply = (a, b) => output.textContent = a * b;

let divide = (a, b) => output.textContent = a / b;

let operator = (a, b) => {
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