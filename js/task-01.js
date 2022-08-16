// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль 
// текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const listWithClass = document.querySelectorAll('.item');

const showNumberOfCategories = listWithClass =>
    `Number of categories: ${listWithClass.length}`;

console.log(showNumberOfCategories(listWithClass));


const firstCategoryTitle = listWithClass[0].firstElementChild;

const firstCategoryTitleText = firstCategoryTitle.textContent;

console.log(`Category: ${firstCategoryTitleText}`);

const firstCategoryList = listWithClass[0].lastElementChild;

const quantityOfItemsFirst = firstCategoryList.children.length;

console.log(`Elements: ${quantityOfItemsFirst}`);



const secondCategoryTitle = listWithClass[1].firstElementChild;

const secondCategoryTitleText = secondCategoryTitle.textContent;

console.log(`Category: ${secondCategoryTitleText}`);

const secondCategoryList = listWithClass[1].lastElementChild;

const quantityOfItemsSecond = secondCategoryList.children.length;

console.log(`Elements: ${quantityOfItemsSecond}`);



const thirdCategoryTitle = listWithClass[2].firstElementChild;

const thirdCategoryTitleText = thirdCategoryTitle.textContent;

console.log(`Category: ${thirdCategoryTitleText}`);

const thirdCategoryList = listWithClass[2].lastElementChild;

const quantityOfItemsThird = thirdCategoryList.children.length;

console.log(`Elements: ${quantityOfItemsThird}`);




