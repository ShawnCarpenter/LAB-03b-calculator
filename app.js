const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
console.log(divideButton);
console.log(multiplyButton);
addButton.addEventListener('click', () => {
    const addOne = document.getElementById('addOne');
    console.log(`AddOne is${addOne}`);
    const addTwo = document.getElementById('addTwo');
    console.log(`AddTwo is${addTwo}`);
    const numberOne = Number(addOne.value);
    const numberTwo = Number(addTwo.value);
    const answer = numberOne + numberTwo;

    console.log(answer);
    document.getElementById('sum').textContent = answer;

});


subtractButton.addEventListener('click', () => {
    const subtractOne = document.getElementById('subtractOne');
    console.log(`subtractOne is${subtractOne}`);
    const subtractTwo = document.getElementById('subtractTwo');
    console.log(`subtractTwo is${subtractTwo}`);
    const numberOne = Number(subtractOne.value);
    const numberTwo = Number(subtractTwo.value);
    const answer = numberOne - numberTwo;

    console.log(answer);
    document.getElementById('result').textContent = answer;

});


divideButton.addEventListener('click', () => {
    const divideOne = document.getElementById('divideOne');
    console.log(`divideOne is${divideOne}`);
    const divideTwo = document.getElementById('divideTwo');
    console.log(`divideTwo is${divideTwo}`);
    const numberOne = Number(divideOne.value);
    const numberTwo = Number(divideTwo.value);
    const answer = numberOne / numberTwo;

    console.log(answer);
    document.getElementById('quotient').textContent = answer;

});


multiplyButton.addEventListener('click', () => {
    const multiplyOne = document.getElementById('multiplyOne');
    console.log(`multiplyOne is${multiplyOne}`);
    const multiplyTwo = document.getElementById('multiplyTwo');
    console.log(`multiplyTwo is${multiplyTwo}`);
    const numberOne = Number(multiplyTwo.value);
    const numberTwo = Number(multiplyTwo.value);
    const answer = numberOne * numberTwo;

    console.log(answer);
    document.getElementById('product').textContent = answer;

});
