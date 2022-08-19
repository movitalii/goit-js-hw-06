let counterValue = 0;

const increaseValueBtn = document.querySelector('[data-action="increment"]');
const decreaseValueBtn = document.querySelector('[data-action="decrement"]');
const spanEl = document.querySelector('#value')

const onIncreaseValueBtnClick = () => {   
    console.log('Increase Value +1');
    counterValue += 1;
    spanEl.textContent = counterValue;
};

increaseValueBtn.addEventListener("click", onIncreaseValueBtnClick);

const onDecreaseValueBtnClick = () => {    
    console.log('Dicrease Value +1');
    counterValue -= 1;
    spanEl.textContent = counterValue;
};

decreaseValueBtn.addEventListener("click", onDecreaseValueBtnClick);
