import { socialsComments } from "./comments.js"
//2 example(Создать массив чисел от 1 до 10)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterNumbers = numbers.filter(number => number >= 5)
console.log(filterNumbers)

//3 example(Создать массив строк, относящихся к любой сущности )
const lines = ["Шкаф", "Стол", "Стул", "Ящик", "Дверь", "Комод"]

const specificLine = lines.includes("Зеркало")
console.log(specificLine)

//4 example(reverse)
function reverseArray(array) {
  array.reverse(); 
  console.log(array)

}

reverseArray(lines)
reverseArray(numbers)

//7 example(Вывести в консоль массив комментариев)
const emailListining = socialsComments.filter(comment => comment.email.includes('.com'))
console.log(emailListining)

//8 example(Перебрать массив)
const checkUserId = socialsComments.map(comment => ({...comment, postId: comment.id <= 5 ? 2 : 1 }));
console.log(checkUserId)

//9 example(Перебрать массив, что бы объекты состояли только из айди и имени)
const newSocialsComments = socialsComments.map(comment => ({
  id: comment.id, 
  name: comment.name
}))
console.log(newSocialsComments)

//10 example(Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов 
// - устанавливаем true, меньше - false.)
const updatedComments = socialsComments.map(comment => ({...comment, isInvalid: comment.body.length > 180}))
console.log(updatedComments)

const commentsWithLength = socialsComments.map(comment => ({...comment, bodyLength: comment.body.length}))
console.log(commentsWithLength)

//11 example(метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map)
const emailArray = socialsComments.reduce(
  function (acc, comment) {
    return [
      acc + comment.email
    ]
  }
)
console.log(emailArray)

const newEmailArray = socialsComments.map(comment => comment.email)
console.log(newEmailArray)

//12 example(Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.)
const emailArrayStr = emailArray.join()
console.log(emailArrayStr)

const newEmailArrayStr = newEmailArray.toString()
console.log(newEmailArrayStr)