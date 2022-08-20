function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor())

const body = document.querySelector('body')
console.log(body)
const span = document.querySelector('span')
console.log(span)
const button = document.querySelector('button')
console.log(button)

const onButtonClick = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  span.textContent = `${getRandomHexColor()}`;
}

button.addEventListener('click', onButtonClick)