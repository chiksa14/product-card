export class Drink {
  #temp
  constructor(name, size, price, temp) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temp = temp;
  };

  getInfoDrink() {
    console.log(`Напиток: ${this.name} размера:${this.size}, стоит ${this.price}р.`);
  };

  getTempDrink() {
    return ((this.#temp).toString());
    console.log(this.#temp);
  };

  setTempDrink(temp) {
    this.#temp = temp;
  };

  cookDrink() {
    console.log(`Идет процесс готовки напитка: ${this.name}.`)
  };

  serveDrink() {
    console.log(`Ваш ${ this.name } готов.`)
  }
}