
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInput = event => {
    const spanFontSize = event.currentTarget.value;

    spanEl.style.fontSize = `${spanFontSize}px`
};

inputEl.addEventListener('input', onInput)



