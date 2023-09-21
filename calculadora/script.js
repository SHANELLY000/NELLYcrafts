// Obtenemos referencias a los elementos HTML
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultParagraph = document.getElementById('result');

// Funciones para realizar las operaciones
function add() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 + num2;
    resultParagraph.textContent = `Resultado: ${result}`;
}

function subtract() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    resultParagraph.textContent = `Resultado: ${result}`;
}

function multiply() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    resultParagraph.textContent = `Resultado: ${result}`;
}

function divide() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (num2 !== 0) {
        const result = num1 / num2;
        resultParagraph.textContent = `Resultado: ${result}`;
    } else {
        resultParagraph.textContent = "No se puede dividir por cero.";
    }
}

// Event listeners para los botones
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
