import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, colorTea) {
    super(name, size, price, temperature)
    this.colorTea = colorTea;
  }

  selectColorTea() {
    console.log(`Цвет заказанного чая: ${this.colorTea}`);
  }
}