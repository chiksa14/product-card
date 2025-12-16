import { Book } from "./Book.js";

export class ReleaseYearBook extends Book {
  constructor(title, author, release) {
    super(title, author)
    this.releaseBook = release;
  }

  releaseYear() {
    console.log(`Автор книги ${this.title}, ${this.author}. Была выпущена в ${this.releaseBook} году`);
  }
}