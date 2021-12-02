let num1 = 23;
let num2 = 6;

function number(number1, number2) {
    if (number1 === 20 || number2 === 20 || number1 + number2 <= 20) {
        return true;
    } else {
        return false;
    }
} console.log(number(num1, num2));