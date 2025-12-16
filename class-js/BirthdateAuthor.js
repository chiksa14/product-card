import { ReleaseYearBook } from "./ReleaseYearBook.js";

export class BirthdateAuthor extends ReleaseYearBook {
  constructor(title, author, release, birthdate) {
    super(title, author, release)
    this.birthdate = birthdate;
  }

  birthdateAuthor() {
    console.log(`Автор книги ${this.title}, ${this.author} родился в ${this.birthdate} году. Сама книга была выпущена в ${this.releaseBook} году`);
  }
}