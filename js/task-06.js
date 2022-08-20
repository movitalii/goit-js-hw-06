
const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const numberOfInputSymbols = event.currentTarget.value.length;
    const numberOfData = Number(inputEl.dataset.length);

    if (numberOfInputSymbols === numberOfData) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }

    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
    numberOfInputSymbols === numberOfData ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
}

