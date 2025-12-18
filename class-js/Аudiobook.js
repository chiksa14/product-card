import { ElectronicBook } from "./ElectronicBook.js";

export class Аudiobook extends ElectronicBook {
  constructor(title, author, brightnessСontrol, readingSpeed) {
    super(title, author, brightnessСontrol)
    this.readingSpeed = readingSpeed;
  }

  read() {
    console.log(`Автор книги ${this.title}, ${this.author}`);
  }

  changeBrightness() {
    console.log(`Вы читаете данную электронную книгу на яркости: ${this.brightnessСontrol}%`);
  }

  changeSpeed() {
    console.log(`Вы изменили скорость чтения на ${this.readingSpeed}x`);
  }
}