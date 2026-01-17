import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  #temp
  constructor(name, size, price, temp, typeСarbonated) {
    super(name, size, price, temp)
    this.typeСarbonated = typeСarbonated;
  }
}