const OP = '';
const num1 = '';
const num2 = '';
const screenCurrent = document.querySelector('.screen-current')
const screenPrev = document.querySelector('.screen-prev')

const btns = document.querySelector('.btn-grid')
btns.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.id === "clearBtn") {
    // TODO
    pressClear();
  } else if (e.target.id === "deleteBtn") {
    // TODO
  } else {
    // TODo
  }
})

function pressClear() {
  screenCurrent.textContent = 0;
  screenPrev.textContent = ' ';
}


function operate(OP, num1, num2) {
  let result = ''

  switch (OP) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "x":
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
