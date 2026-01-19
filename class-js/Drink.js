export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  };

  getInfoDrink() {
    console.log(`Напиток: ${this.name} размера: ${this.size}, стоит ${this.price} р.`);
  };

  getTempDrink() {
    return ((this.#temperature).toString());
    console.log(this.#temperature);
  };

  setTempDrink(temp) {
    this.#temperature = temperature;
  };

  cookDrink() {
    console.log(`Идет процесс готовки напитка: ${this.name}.`);
  };

  serveDrink() {
    console.log(`Ваш ${ this.name } готов.`)
  }
}