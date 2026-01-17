import { Drink } from "./Drink.js";

export class Milkshake extends Drink {
  #temp
  constructor(name, size, price, temp, tasteSyrup) {
    super(name, size, price, temp)
    this.tasteSyrup = tasteSyrup;
  }
}