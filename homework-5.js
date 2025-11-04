// Город и температура
function showWeather(city, temperature) {
  console.log(`В городе ${city} сейчас ${temperature}°C.`);
}

showWeather("Астрахань", 11)

// Выше/ниже скорости звука
const SPEED_SOUND = 343;

function soundComparison(speed) {
  if (speed > SPEED_SOUND){
    console.log('Сверхзвуковая скорость');
  } else {
    console.log('Дозвуковая скорость');
  }
}

soundComparison(368)

// Покупка товара
const goods = 'Хлеб';
const goodsPrice = 30;

function currentBudget(budget) {
  if (budget >= goodsPrice){
    console.log(`${goods} приобретён за ${goodsPrice} рублей. Спасибо за покупку!`)
    const ostatok = budget - goodsPrice
    console.log(`Ваша сдача составляет ${ostatok} рублей`)
  } else{
    const notEnough = goodsPrice - budget
    console.log(`Вам не хватает ${notEnough} рублей`)
  }
}

currentBudget(100)

// функция и переменные по усмотрению

const hoodies = 1500;
const clothCap = 500;
const shorts = 800;

function buyClothes(myBudget) {
  const totalCost = hoodies + clothCap + shorts;
  const remainder = myBudget - totalCost;
  if (myBudget >= totalCost){
    console.log(`Вы приобрели весь набор, который состоит из Худи(${hoodies} р.), кепки(${clothCap} р.), шорт(${shorts} р.). Ваш остаток ${remainder} рублей`)
  } else{
    const notBudget = totalCost - myBudget;
    console.log(`На вашем счете недостаточно средств. Пополните его на ${notBudget} р.`)
  }
}

buyClothes(3000)