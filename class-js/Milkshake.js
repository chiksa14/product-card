import { Drink } from "./Drink.js";

export class Milkshake extends Drink {
  constructor(name, size, price, temperature, tasteSyrup) {
    super(name, size, price, temperature);
    this.tasteSyrup = tasteSyrup;
  };

  selectSyrup() {
    console.log(`Вы выбрали ${ this.tasteSyrup } сироп`);
  }
}