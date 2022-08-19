
const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const numberOfInputSymbols = event.currentTarget.value.length;
    const numberOfData = Number(inputEl.dataset.length);
    numberOfInputSymbols === numberOfData ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
}

