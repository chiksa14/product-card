//1 example(создать объект на основе данных)
const user = {
  name: "Дамир",
  surname: "Мухтабалиев",
  email: "muhtabalievdamir@gmail.com",
  job: "Frontend Developer",
  age: 18,
  country: "Россия",
  region: "Астраханская область",
  city: "Астрахань",
  nationality: "казах"
}

console.log(user)

//2 example(созать объект, который будет хранить данные об автомобиле)
const infoCar = {
  brand: "Mersedes",
  model: "cls",
  releaseYear: 2022,
  color: "black",
  boxType: "auto"
}

infoCar.carOwner = [user.name]

console.log(infoCar)

//3 example(Написать функцию, которая аргументом будет принимать объект, описанный в пункте №4)
function checkAndSetMaxSpeed(obj, maxSpeed) {
  if (!obj.hasOwnProperty('maxSpeed')) {
    obj['maxSpeed'] = maxSpeed;
  }
}

checkAndSetMaxSpeed(infoCar, 280)

console.log(infoCar)

//4 example(функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение)
function getPropertyValue(obj, property) {
  console.log(obj[property])
}

getPropertyValue(infoCar, "releaseYear")

//5 example(Создать массив, который содержит названия продуктов (просто строки))
let = ['хлеб', 'яйца', 'майонез', 'кетчуп']

//6 example(Создать массив, состоящий из объектов, где объект представляет собой книгу )
let frames = [
  {name: "Александр", position: "Frontend Developer", experience: 2},
  {name: "Евгений", position: "Backend Developer", experience: 5},
  {name: "Кирилл", position: "HR-менеджер", experience: 1},
  {name: "Денис", position: "Projet Manager", experience: 3}
]

frames.push({name: "Артем", position:"TechLead", experience: 8})

console.log(frames)

//7 example(массив, состоящих из тех же книг, но относящийся к определенной вселенной )
let teamExpertiseDomains = [
  {direction: "Frontend", pl: "html,css,js"},
  {direction: "Backend", pl: "python,JavaScript,Java"}
]

let teamComposition  = [...frames, ...teamExpertiseDomains]

console.log(teamComposition)

//8 example(map)
const checkingWorkExperience = (framesArray) => 
  framesArray.map(frames => ({ ...frames, isBeginer: frames.experience > 3}));

const resultCheckingWorkExperince = checkingWorkExperience(frames)

console.log(resultCheckingWorkExperince)
