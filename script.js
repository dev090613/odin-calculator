const HISTORY = [];
const screenCurrent = document.querySelector('.screen-current')
const screenPrev = document.querySelector('.screen-prev')

const btns = document.querySelector('.btn-grid')
btns.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  const button = e.target;

  if (e.target.id === "clearBtn") {
    pressClearBtn();
  } else if (e.target.id === "deleteBtn") {
    pressDelBtn();
  } else {
    const val = button.textContent;
    pressSmallBtn(val);
  }
})

function pressDelBtn() {
  let current = screenCurrent.textContent

  if (current.length === 0) {
    return;
  } else if (curVal.length === 1) {
    screenCurrent.textContent = '0'
    curVal = '0'
    return;
  }

  screenCurrent.textContent = current.slice(0, -1);
  return;
}

const OPs = ['+', '-', 'x', '/']
let op = '';
let curVal = '0'
function pressSmallBtn(val) {
  if (OPs.includes(val)) {
    let num1 = screenCurrent.textContent
    screenPrev.textContent = num1 + val
    curVal = '0'
  } else if (val === '=') {
    if (Number.isInteger(Number(screenPrev.textContent))) {
      return ;
    }
    operate() ;
  } else if (val === '.') {
    if (screenCurrent.textContent.includes('.')) 
      return ;
    screenCurrent.textContent += '.'
    curVal += '.'

  } else {
    screenCurrent.textContent = updateCurVal(val)
  }
}

function updateCurVal(val) {

  if (curVal === '0') {
    curVal = val;
  } else {
    if (curVal.length > 13) return;
    curVal += val;
  }
  return curVal;
}

function pressClearBtn() {
  screenCurrent.textContent = '0';
  screenPrev.textContent = '';
  curVal = '0'
}

function getCurVal() {
  return screenCurrent.textContent
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

  curVal = String(result);
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
