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
})

function updateDisplay() {
  // 보조 화면 - operator 유무에 따라
  if (operator === '') {
    screenPrev.textContent = '';
  } else {
    screenPrev.textContent = `${num1} {operator}`;
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

function pressDelBtn() {
  if (num2 !== '') {
    num2 = num2.slice(0, -1);
  } else if (operator !== '') {
    operator = ''
  } else if (num1 !== '') {
    num1 = num1.slice(0, -1);
  }
}

function handleNumber(val){}

function handleEqual() {}

function handleOperator(val) {
}

function operate() {
  console.log("function operate started")
  const screenPrevVal = screenPrev.textContent;

  const num1 = Number(screenPrevVal.slice(0,-1))
  const op = screenPrevVal.at(-1);
  const num2 = Number(screenCurrent.textContent);

  let result = 0
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      break;
  }

  curVal = '0'
  screenPrev.textContent = ' '
  screenCurrent.textContent = String(result)
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
    return "Can't divide by zero"
  }
  return num1 / num2;
}

const yearSpan = document.querySelector('#year')
yearSpan.textContent = new Date().getFullYear() + ' JunsooLee'
