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
import { ReleaseYearBook } from './class-js/ReleaseYearBook.js';
import { BirthdateAuthor } from './class-js/BirthdateAuthor.js';

const poorLiza = new Book('Бедная Лиза', 'Николай Карамзин');
poorLiza.read();

const eugeneOnegin = new ReleaseYearBook('Евгений Онегин', 'Александр Пушкин', 1830);
eugeneOnegin.releaseYear();

const mirgorod = new BirthdateAuthor('Миргород', 'Николай Гоголь', 1835, 1809);
mirgorod.birthdateAuthor();

const regisForm = new Form('regForm');
regisForm.init();

const modalInstance = new Modal('loginModal');
modalInstance.init();
modalInstance.isOpen();