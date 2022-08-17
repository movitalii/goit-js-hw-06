const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1. First version, using document.createElement()

// const listEl = document.querySelector('.gallery')

// const makeListOfElements = images => {
//   return images.map(image => {
//     const itemEl = document.createElement('li')
//     const imgEl = document.createElement('img');
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.width = '500'

//     itemEl.append(imgEl);

//     return itemEl;
//   });
// };

// const elements = makeListOfElements(images);
// listEl.append(...elements);
// console.log(listEl)



// 2. Second version, using insertAdjacentHTML()

const makeImagesMarkup = image => { 
  const { url, alt } = image;
  return `
  <li class="gallery__item">
    <img class="gallery__img" src="${url}" alt="${alt}"/>
  </li>
  `;
};

const listEl = document.querySelector('.gallery')

const makeImagesList = images
  .map(makeImagesMarkup)
  .join('');

listEl.insertAdjacentHTML("afterbegin", makeImagesList);

console.log(listEl)


