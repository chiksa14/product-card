import { Book } from "./Book.js";

export class Аudiobook extends Book {
  constructor(title, author, readingSpeed) {
    super(title, author)
    this.readingSpeed = readingSpeed;
  }

  changeSpeed() {
    console.log(`Вы изменили скорость чтения на ${this.readingSpeed}x`);
  }
}