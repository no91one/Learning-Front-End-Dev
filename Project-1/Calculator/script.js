var Keys = document.getElementsByClassName('key');
var display = document.getElementById('display');
var clearAll = document.getElementById('clear');
clearAll.addEventListener('click', function () {
    display.innerText = null;
});
var operand1 = 0;
var operator = null;
var operand2 = null;
for (var i = 0; i < Keys.length; i++) {
    Keys[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == '+') {
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if (value == '-') {
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if (value == '*') {
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if (value == '/') {
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if (value == '=') {
            operand2 = parseFloat(display.textContent);
            if (operator == '/' && operand2 == '0') {
                display.innerText = "Error"
            }
            else
                display.innerText = eval(operand1 + operator + operand2);
        }
        else {
            display.innerText += value;
        }
    })
}
// Keyboard Events 
for (var i = 0; i < Keys.length; i++) {
    Keys.addEventListener('keydown', function (event) {
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            display.innerText += event.keyCode;
        }
    })
}