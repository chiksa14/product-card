import { productCards } from "./card-list.js"
//3 example 
function outputProductCards(сards) {
  const productCardTemplate = document.getElementById('product-card-template');
  const productCardList = document.querySelector('#product-card-list');

  productCardList.innerHTML = "";

  сards.forEach(productCard => {
    const productCardClone = productCardTemplate.content.cloneNode(true);

    productCardClone.querySelector('.card-image').src = `images/${productCard.image}.png`;
    productCardClone.querySelector('.product-category').textContent = productCard.category;
    productCardClone.querySelector('.product-name').textContent = productCard.name;
    productCardClone.querySelector('.product-description').textContent = productCard.description;
    productCardClone.querySelector('.product-price').innerHTML = `${productCard.price} &#8381;`;


    const productCompound = productCardClone.querySelector('.product-compound');
    productCompound.innerHTML = productCard.compound
      .map(item => `<li>${item}</li>`)
      .join("");

    productCardList.appendChild(productCardClone);
  });
}



//4 example Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой
const productNamesString = productCards.reduce((acc, product, index) => {
  return acc + (index === 0 ? '' : '; ') + product.name;
}, '');
console.log(productNamesString)
//5 example Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const nameDescriptionArray = productCards.reduce((acc, product) => {
  acc.push({ [product.name]: product.description});
  return acc
}, [])

console.log(nameDescriptionArray)

//6 example
const showCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);

  if ( numbers > 0 && numbers <= productCards.length) {
    outputProductCards(productCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
};

showCards()

