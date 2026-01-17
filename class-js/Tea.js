import { Drink } from "./Drink.js";

export class Tea extends Drink {
  #temp
  constructor(name, size, price, temp, colorTea) {
    super(name, size, price, temp)
    this.colorTea = colorTea;
  }
}