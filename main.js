let clear = document.getElementById('clear');
let display = document.getElementById('display');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let divide = document.getElementById('divide');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let mult = document.getElementById('mult');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let sub = document.getElementById('sub');
let zero = document.getElementById('0');
let decimal = document.getElementById('decimal');
let equals = document.getElementById('equals');
let add = document.getElementById('add');

one.addEventListener('click', () => {
    display.textContent += 1;
});
two.addEventListener('click', () => {
    display.textContent += 2;
});
three.addEventListener('click', () => {
    display.textContent += 3;
});
four.addEventListener('click', () => {
    display.textContent += 4;
});
five.addEventListener('click', () => {
    display.textContent += 5;
});
six.addEventListener('click', () => {
    display.textContent += 6;
});
seven.addEventListener('click', () => {
    display.textContent += 7;
});
eight.addEventListener('click', () => {
    display.textContent += 8;
});
nine.addEventListener('click', () => {
    display.textContent += 9;
});
zero.addEventListener('click', () => {
    display.textContent += 0;
});
clear.addEventListener('click', () => {
    display.textContent = '';
});
divide.addEventListener('click', () => {
    display.textContent += '/';
});
mult.addEventListener('click', () => {
    display.textContent += '*';
});
sub.addEventListener('click', () => {
    display.textContent += '-';
});
add.addEventListener('click', () => {
    display.textContent += '+';
});
decimal.addEventListener('click', () => {
    if (display.textContent === '') {
        display.textContent += '0.';
    } else {
        display.textContent += '.';
    }
});

equals.addEventListener('click', () => {
    display.textContent = eval(display.textContent);
});
