import { Drink } from "./Drink.js";
import { Lemonade } from "./Lemonade.js";
import { Tea } from "./Tea.js";
import { Milkshake } from "./Milkshake.js";

export class Cafe {
  constructor(nameCafe, geoCafe) {
    this.nameCafe = nameCafe;
    this.geoCafe = geoCafe;
    this.menu = [
      new Lemonade('Лимонад', 'средний', 149, 'Холодный', 'сильногазированный'),
      new Tea('Чай', 'маленький', 99, 'горячий', 'черный'),
      new Milkshake('Милкшейк', 'большой', 199, 'холодный', 'Клубничный')
    ];
  }

  getInfoCafe() {
    console.log(`Добро пожаловать в лучшую кофейню "${this.nameCafe}" в г.${this.geoCafe}. Меню состоит из ${this.menu.length} напитков(все в наличии)`)
  };

  showMenu() {
    console.log('Меню:')
    this.menu.forEach(drink => {
      console.log(`${drink.name} - ${drink.price} руб.`);
    });
  };

  buyDrink(drinkName) {
  if (!drinkName || typeof drinkName !== 'string') {
    return;
  };
  
  const searchName = drinkName.toLowerCase();
  const drink = this.menu.find(item => item?.name?.toLowerCase()?.includes(searchName)
  );
  
  if (!drink) {
    console.log(`Напитка "${drinkName}" нет в меню`);
    return;
  };
  
  drink.cookDrink();
  drink.serveDrink();
  console.log('Заказ выполнен');
}
}