//level 1; example 4
const emailForm = document.querySelector('.footer-email-form-container')

emailForm.addEventListener('submit', (event) => {
  const form = event.target;
  const formData = new FormData(form)
  event.preventDefault();
  const entriesEmail = Object.fromEntries(formData.entries());
  console.log(entriesEmail)
})

//level 2 example 5

const openRegForm = document.querySelector('.openRegForm');
const formContainer = document.getElementById('regFormContainer');

formContainer.style.display = 'none';

openRegForm.addEventListener('click', function() {
  if (formContainer.style.display === 'none') {
    formContainer.style.display = 'block';
    this.textContent = 'Close Registration';
    this.style.background = '#ff4444';
  } else {
    formContainer.style.display = 'none';
    this.textContent = 'Registration';
    this.style.background = '#4CAF50';
    const form = document.getElementById('regForm');
    if (form) form.reset();
  }
});

const formReg = document.forms.regForm;

let savedFormReg = null;

formReg.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formReg);
  const data = Object.fromEntries(formData.entries());
  if (data.password !== data.confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  delete data.confirmPassword;
  data.createdOn = new Date()
  console.log(data);
  savedFormReg = data;
})

setTimeout(() => {
  console.log("Проверка savedformReg:", savedFormReg);
}, 20000);
//level 3 example 7

const openLoginForm = document.querySelector('.authentication');
const loginModal = document.querySelector('#loginModal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const formLogin = document.querySelector('#loginForm');
const overlay = document.querySelector('.modal__overlay');

function openModal() {
  loginModal.classList.add('modal-showed');
  closeModalBtn.textContent = '❌';
  closeModalBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  loginModal.classList.remove('modal-showed');
  closeModalBtn.textContent = '';
  closeModalBtn.classList.remove('active');
  document.body.style.overflow = '';
  formLogin.reset();
}

//level 3 example 10(объявил переменную)
let currentUser = {};

//продолжение level 2
function handleAuthentication(event) {
  event.preventDefault();

  const formData = new FormData(formLogin);
  const loginData = Object.fromEntries(formData.entries());

  console.log('Данные для аутентификации:', loginData);
  if (loginData.login === savedFormReg.login && loginData.password === savedFormReg.password) {
    alert(`Welcome, ${loginData.login}! Authentication successful.`);
    currentUser = loginData;
    setTimeout(() => {
      closeModal();
    }, 500);
  } else {
    alert('Invalid username or password');
  }
  if ('пользователь вошел в аккаунт') {
    currentUser.login = loginData.login;
    currentUser.lastLogin = new Date();
    console.log("Пользователь вошёл:", currentUser);
  }
}

openLoginForm.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

formLogin.addEventListener('submit', handleAuthentication);

//level 3 example 10(начинается с 97 по 104 строчку)