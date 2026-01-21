import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, typeСarbonated) {
    super(name, size, price, temperature);
    this.typeСarbonated = typeСarbonated;
  };

  selectTypeGas() {
    console.log(`Вы выбрали ${ this.typeСarbonated } лимонад`);
  }
}