// Изменение цвета всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#btn-change-color-all-card');
const greenColorHash = '#00FF00';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Изменение цвета первой карточки
const blueColorHash = '#0000FF';
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#btn-change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Кнопка открытия сайта google.com
const openGoogleButton = document.querySelector('#btn-open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return; 
  }
}

// Вывод сообщения в консоли
const outputLogButton = document.querySelector('#btn-output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ #4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Изменение цвета кнопки
 const colorChangeButton = document.getElementById('btn-change');

    colorChangeButton.addEventListener('click', function() {
        colorChangeButton.style.backgroundColor = 'red';
    });


colorChangeButton.addEventListener('click', () => {
  changeColorButton()
})

function changeColorButton() {
  colorChangeButton.classList.toggle('bg-red');
}

// Вывод в консоли при наведении на загаловок страницы
const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
})

// Кнопка купить
const buttonPay = document.querySelector('.btn-pay');

function openWindow() {
  const answer = confirm('Вы действительно хотите купить?')

  if (answer === true) {
    window.open('https://pay.com')
  } else {
    return; 
  }
}