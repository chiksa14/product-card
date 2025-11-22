//2 example(Создать массив чисел от 1 до 10)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterNumbers = numbers.filter(number => number >= 5)
console.log(filterNumbers)

//3 example(Создать массив строк, относящихся к любой сущности )
const lines = ["Шкаф", "Стол", "Стул", "Ящик", "Дверь", "Комод"]

const specificLine = lines.includes("Зеркало")
console.log(specificLine)

//4 example(reverse)
function reversedArrays (numbers, lines) {
  numbers.reverse(); lines.reverse()
  console.log(numbers, lines)

}

reversedArrays(numbers, lines)

//7 example(Вывести в консоль массив комментариев)
import { commentsSocials } from "./comments.js"
const emailListining = commentsSocials.filter(comment => comment.email.includes('.com'))
console.log(emailListining)

//8 example(Перебрать массив)
const checkUserId = commentsSocials.map(comment => ({...comment, postId: comment.id <= 5 ? 2 : 1 }));
console.log(checkUserId)

//9 example(Перебрать массив, что бы объекты состояли только из айди и имени)
const newCommentsSocials = commentsSocials.map(({id, name}) => ({id, name}))
console.log(newCommentsSocials)

//10 example(Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов 
// - устанавливаем true, меньше - false.)
const updatedComments = commentsSocials.map(comment => ({...comment, isInvalid: comment.body.length > 180 ? true : false}))
console.log(updatedComments)

const commentsWithLength = commentsSocials.map(comment => ({...comment, bodyLength: comment.body.length}))
console.log(commentsWithLength)

//11 example(метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map)
const emailArray = commentsSocials.reduce(
  function (acc, comment) {
    return [
      acc + ', ' + comment.email
    ]
  }
)
console.log(emailArray)

const newEmailArray = commentsSocials.map(comment => comment.email)
console.log(newEmailArray)

//12 example(Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.)
const emailArrayStr = emailArray.join()
console.log(emailArrayStr)

const newEmailArrayStr = newEmailArray.toString()
console.log(newEmailArrayStr)