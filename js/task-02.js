
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1. First version

const createItemEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
})

const listEl = document.querySelector('ul');
listEl.append(...createItemEl);
console.log(listEl);

// 2. Second Version

// const elements = []

// for (let i = 0; i < ingredients.length; i++) {
//   const element = ingredients[i];

//   const itemElement = document.createElement('li');
//   itemElement.classList.add('item');
//   itemElement.textContent = element;

//   elements.push(itemElement);  
// }

// const listElelement = document.querySelector('ul');
// listElelement.append(...elements);
// console.log(listElelement);


