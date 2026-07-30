const HISTORY = [];
const screenCurrent = document.querySelector('.screen-current')
const screenPrev = document.querySelector('.screen-prev')

let currentVal = '0'
let prevVal = ''

const btns = document.querySelector('.btn-grid')
btns.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  const button = e.target;

  if (e.target.id === "clearBtn") {
    console.log(button)
    pressClearBtn();
  } else if (e.target.id === "deleteBtn") {
    console.log(button)
    pressDelBtn();
  } else {
    const val = button.textContent;
    pressSmallBtn(val);
  }
})

function pressDelBtn() {
  console.log("TODO");
}

const OPs = ['+', '-', 'x', '/']
let num1 = '';
let op = '';
function pressSmallBtn(val) {
  if (OPs.includes(val)) {
    num1 = screenCurrent.textContent;
    op = val
    screenPrev.textContent = num1 + op
    currentVal = '0'
  } else if (val === '=') {
    operate();
  } else {
    updateCurVal(val);
    screenCurrent.textContent = currentVal;
  }
}

function updateCurVal(val) {
  if (val === '.' && currentVal.includes('.')) {
    return;
  }

  if (currentVal === '0') {
    currentVal = val;
  } else {
    if (currentVal.length > 13) return;
    currentVal += val;
  }
  return;
}

function pressClearBtn() {
  currentVal = '0';
  prevVal = ' ';

  screenCurrent.textContent = currentVal;
  screenPrev.textContent = prevVal;
}


function operate() {
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
  }

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
  return num1 / num2
}

const yearSpan = document.querySelector('#year')
yearSpan.textContent = new Date().getFullYear() + ' JunsooLee'
