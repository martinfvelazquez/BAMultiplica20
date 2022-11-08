let firstNumber = parseFloat(prompt("Ingrese el primer número: "));

let secondNumber = parseFloat(prompt("Ingrese el segundo número: "));

let operation = prompt("Ingrese el tipo de operación: (+, -, *, /)");

let result;

switch(operation) {
    case '+':
        result = (firstNumber + secondNumber);
        alert(`${firstNumber} + ${secondNumber} = ${result}`);
        break;

    case '-':
        result = (firstNumber - secondNumber);
        alert(`${firstNumber} - ${secondNumber} = ${result}`);
        break;

    case '*':
        result = (firstNumber * secondNumber);
        alert(`${firstNumber} * ${secondNumber} = ${result}`);
        break;

    case '/':
        result = (firstNumber / secondNumber);
        alert(`${firstNumber} / ${secondNumber} = ${result}`);
        break;

    default:
        alert('Operador inválido');
        break;
}