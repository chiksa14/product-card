const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#btn-change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF'

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#btn-change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

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

const outputLogButton = document.querySelector('#btn-output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ #4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}


 const colorChangeButton = document.getElementById('btn-bg-aquamarine');

    colorChangeButton.addEventListener('click', function () {
        colorChangeButton.style.backgroundColor = 'red';
    });


colorChangeButton.addEventListener('click', () => {
  changeColorButton()
})

function changeColorButton() {
  colorChangeButton.classList.toggle('bg-red');
}

const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
})