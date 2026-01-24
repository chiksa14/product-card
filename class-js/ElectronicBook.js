import { Book } from "./Book.js";

export class ElectronicBook extends Book {

  constructor(title, author, brightnessСontrol) {
    super(title, author)
    this.brightnessСontrol = brightnessСontrol;
  }

  changeBrightness() {
    console.log(`Вы читаете данную электронную книгу на яркости: ${this.brightnessСontrol}%`);
  }
  
}