export class Book {

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read() {
    console.log(`Автор книги ${this.title}, ${this.author}`);
  }
  
}
