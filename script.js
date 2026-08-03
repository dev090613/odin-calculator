const screenCurrent = document.querySelector('.screen-current')
const screenPrev = document.querySelector('.screen-prev')

let num1 = ''
let operator = ''
let num2 = ''
let isCalculated = false;
const operators = ['+', '-', 'x', '/']

const btns = document.querySelector('.btn-grid')
btns.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  const val = e.target.textContent;

  if (val === 'CLEAR') {
    pressClearBtn()
  } else if (val === 'DELETE') {
    pressDelBtn()
  } else if (val === '=') {
    handleEqual()
  } else if (operators.includes(val)) {
    handleOperator(val)
  } else {
    handleNumber(val)
  }

  updateDisplay();
  console.log(num1)
  console.log(operator)
  console.log(num2)
})

function updateDisplay() {
  // 보조 화면 - operator 유무에 따라
  if (operator === '') {
    screenPrev.textContent = '';
  } else {
    screenPrev.textContent = `${num1} ${operator}`;
  }
  // 메인 화면
  if (num2 !== '') {
    screenCurrent.textContent = num2;
  } else if (num1 === '') {
    screenCurrent.textContent = '0';
  } else {
    screenCurrent.textContent = num1;
  }
}

function pressClearBtn() {
  num1 = '';
  operator = '';
  num2 = ''
  isCalculated = false;
}

function pressDelBtn() {
  if (num2 !== '') {
    num2 = num2.slice(0, -1);
  } else if (operator !== '') {
    operator = ''
  } else if (num1 !== '') {
    num1 = num1.slice(0, -1);
  }

  isCalculated = false
}

function handleNumber(digit){
  if (isCalculated && operator === '') {
    if (digit === '.') {
      num1 = '0.'
    } else {
      num1 = digit;
    }
    isCalculated = false
    return;
  }

  if (operator === '') {
    if (digit === '.' && num1.includes('.'))
      return;
    if (num1 === '' && digit === '.') 
      num1 = "0";
    num1 = (num1 === '0' && digit !== '.') ? digit : num1 + digit;
  } else {
    if (digit === '.' && num2.includes('.'))
      return;
    if (num2 === '' && digit === '.')
      num2 = "0";
    num2 = (num2 === '0' && digit !== '.') ? digit : num2 + digit;
  }
}

function handleEqual() {
  if (num1 === "Can't divide by '0'")
    num1 = 0;

  if (num1 === '' || num2 === '' || operator === '') 
    return;

  const result = operate(Number(num1), operator, Number(num2))
  num1 = String(result);
  num2 = '';
  operator = '';
  isCalculated = true;
}

function handleOperator(op) {
  if (num1 === "Can't divide by '0'")
    num1 = 0;

  if (num1 === '')
    num1 = '0';

  if (num1 !== '' && operator !== '' && num2 !== '') {
    num1 = String(
      operate(Number(num1), operator, Number(num2))
    )
    num2 = '';
  }

  operator = op;
  isCalculated = false
}

function operate(n1, op, n2) {

  let result = 0
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = subtract(n1, n2);
      break;
    case "x":
      result = multiply(n1, n2);
      break;
    case "/":
      result = divide(n1, n2);
      break;
    default:
      break;
  }

  if (typeof result === 'string')
    return result;

  return Math.round(result * 10000) / 10000;
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
  if (num2 === 0) {
    return "Can't divide by '0'"
  }
  return num1 / num2;
}

const yearSpan = document.querySelector('#year')
yearSpan.textContent = new Date().getFullYear() + ' JunsooLee'
