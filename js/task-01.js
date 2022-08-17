const quantityOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', quantityOfCategories.length);

quantityOfCategories.forEach(function (category) {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);   
});




