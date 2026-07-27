console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(multiply(2, 0))
console.log(divide(1, 3))

const OP = '';
const num1 = '';
const num2 = '';

function operate(OP, num1, num2) {
  let result = ''

  switch (OP) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "%":
      result = divide(num1, num2);
      break;
  }
  return result;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

const yearSpan = document.querySelector('#year')
yearSpan.textContent = new Date().getFullYear() + ' JunsooLee'
