const simpleCalculatorStart = () => {
    // debugger;
    const proceed = confirm ('Would you like to calculate two numbers together?');
    if (proceed) {
        const firstValue = parseInt(
            prompt('Please enter the first number.'));
        const secondValue = parseInt(
            prompt('Please enter the second number.'));
        const result = performMathOperation(firstValue, secondValue);
        alert('The result is ' + result + '.');
    }
}
const performMathOperation = (firstValue, secondValue) => {
    // debugger;
    const operation = prompt('Which math operation do you want to perform (e.g. add, subtract, multiply, or divide) the two numbers?');
    let result = 0;
    switch(operation) {
        case 'add':
            result = firstValue + secondValue;
            break;
        case 'subtract':
            result = firstValue - secondValue;
            break;
        case 'multiply':
            result = firstValue * secondValue;
            break;
        case 'divide':
            result = firstValue / secondValue;
    }
    return result;
}