// Город и температура
function showWeather(city, temperature) {
  console.log(`В городе ${city} сейчас ${temperature}°C.`);
}

showWeather("Астрахань", 11)

// Выше/ниже скорости звука
const SPEED_SOUND = 343;

function compareSpeed(speed) {
  if (speed > SPEED_SOUND) {
    console.log('Сверхзвуковая скорость');
  } else {
    console.log('Дозвуковая скорость');
  }
}

compareSpeed(368)

// Покупка товара
const product = 'Хлеб';
const productPrice = 30;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${product} приобретён за ${productPrice} рублей. Спасибо за покупку!`)
    const remains = budget - productPrice
    console.log(`Ваша сдача составляет ${remains} рублей`)
  } else {
    const notEnough = productPrice - budget
    console.log(`Вам не хватает ${notEnough} рублей`)
  }
}

buyProduct(100)

// функция и переменные по усмотрению

const priceHoodies = 1500;
const priceClothCap = 500;
const priceShorts = 800;

function buyClothes(myBudget) {
  const totalCost = priceHoodies + priceClothCap + priceShorts;
  const remainder = myBudget - totalCost;
  if (myBudget >= totalCost) {
    console.log(`Вы приобрели весь набор, который состоит из Худи(${priceHoodies} р.), кепки(${priceClothCap} р.), шорт(${priceShorts} р.). Ваш остаток ${remainder} рублей`)
  } else {
    const difference = totalCost - myBudget;
    console.log(`На вашем счете недостаточно средств. Пополните его на ${difference} р.`)
  }
}

buyClothes(3000)