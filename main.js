//Example 2 (работа с импортами)

import './card-list.js';
import './comments.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './Modal.js'

//example 3 (работа со струткурой и классами)

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read() {
    console.log(`Автор книги ${this.title}, ${this.author}`);
  }
}

class ReleaseYearBook extends book {
  constructor(title, author, release) {
    super(title, author)
    this.releaseBook = release;
  }

  releaseYear() {
    console.log(`Автор книги ${this.title}, ${this.author}. Была выпущена в ${this.releaseBook} году`);
  }
}

class BirthdateAuthor extends ReleaseYearBook {
  constructor(title, author, release, birthdate) {
    super(title, author, release)
    this.birthdate = birthdate;
  }

  birthdateAuthor() {
    console.log(`Автор книги ${this.title}, ${this.author} родился в ${this.birthdate} году. Сама книга была выпущена в ${this.releaseBook} году`);
  }
}
const poorLiza = new book('Бедная Лиза', 'Николай Карамзин');
const eugeneOnegin = new ReleaseYearBook('Евгений Онегин', 'Александр Пушкин', 1830);
const mirgorod = new BirthdateAuthor('Миргород', 'Николай Гоголь', 1835, 1809);
mirgorod.birthdateAuthor();
poorLiza.read();
eugeneOnegin.releaseYear();



class friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}, you are ${this.age} y.o`);
  }
}

class Walk extends friend {
  constructor(name, age, time) {
    super(name, age)
    this.time = time;
  }

  walkingFriends() {
    console.log(`Hello ${this.name}, you are ${this.age} y.o, we'll go for a walk in ${this.time}`)
  }
}

const dima = new friend('Дима', 18);
dima.greet();
const kirill = new Walk('Кирилл', 17, '19:00');
kirill.walkingFriends();