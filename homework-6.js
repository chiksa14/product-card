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
const carInfo = {
  brand: "Mersedes",
  model: "cls",
  releaseYear: 2022,
  color: "black",
  boxType: "auto"
}

carInfo.owner = user

console.log(carInfo)

//3 example(Написать функцию, которая аргументом будет принимать объект, описанный в пункте №4)
function setMaximumSpeed(obj, maxSpeed) {
  if (!obj.hasOwnProperty('maxSpeed')) {
    obj.maxSpeed = maxSpeed;
  }
}

setMaximumSpeed(carInfo, 280)

console.log(carInfo)

//4 example(функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение)
function getPropertyValue(obj, property) {
  console.log(obj[property])
}

getPropertyValue(carInfo, "releaseYear")

//5 example(Создать массив, который содержит названия продуктов (просто строки))
let products= ['хлеб', 'яйца', 'майонез', 'кетчуп']

//6 example(Создать массив, состоящий из объектов, где объект представляет собой книгу )
const frames = [
  {
    name: "Александр",
    position: "Frontend Developer",
    experience: 2
  },
  {
    name: "Евгений", 
    position: "Backend Developer", 
    experience: 5
  },
  {
    name: "Кирилл", 
    position: "HR-менеджер", 
    experience: 1
  },
  {
    name: "Денис", 
    position: "Projet Manager",
    experience: 3
  }
]

frames.push({
  name: "Артем", 
  position:"TechLead",
  experience: 8
})

console.log(frames)

//7 example(массив, состоящих из тех же книг, но относящийся к определенной вселенной )
const framesNew = [
  {
    name: "Матвей",
    position: "Team Lead ",
    experience: 7
  },
  {
    name: "Егор",
    position: "Тестировщик",
    experience: 5
  },
  {
    name: "Евгений",
    position: "SMM-специалист",
    experience: 3
  }
]

const teamComposition  = [...frames, ...framesNew]

console.log(teamComposition)

//8 example(map)
const checkingWorkExperience = (framesArray) => 
  framesArray.map(teamComposition => ({ ...teamComposition, isBeginer: teamComposition.experience > 3}));

const resultCheckingWorkExperince = checkingWorkExperience(teamComposition)

console.log(resultCheckingWorkExperince)