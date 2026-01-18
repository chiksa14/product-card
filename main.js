//Example 2 (работа с импортами)

import './card-list.js';
import './comments.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import { Form } from './class-js/Form.js';
import { Modal } from './class-js/Modal.js';
import { Book } from './class-js/Book.js';
import { ElectronicBook } from './class-js/ElectronicBook.js';
import { Аudiobook } from './class-js/Аudiobook.js';
import { Cafe } from './class-js/Cafe.js';
import { Drink } from './class-js/Drink.js';
import { Lemonade } from './class-js/Lemonade.js';
import { Milkshake } from './class-js/Milkshake.js';
import { Tea } from './class-js/Tea.js';

const poorLiza = new Book('Бедная Лиза', 'Николай Карамзин');
poorLiza.read();

const eugeneOnegin = new ElectronicBook('Евгений Онегин', 'Александр Пушкин', 30);
eugeneOnegin.changeBrightness();

const mirgorod = new Аudiobook('Миргород', 'Николай Гоголь', 1.25);
mirgorod.changeSpeed();

const regisForm = new Form('regForm');
regisForm.init();

const modalInstance = new Modal('loginModal');
modalInstance.init();
modalInstance.isOpen();

const cafe = new Cafe('Мусафар', 'Астрахань');
cafe.getInfoCafe();
cafe.showMenu();
cafe.buyDrink();
cafe.buyDrink('чай')

const tea = new Tea('Чай', 'маленький', 99, 100, 'черный')
tea.selectColorTea();
tea.cookDrink