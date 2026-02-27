const textLoad = document.getElementById('text-load');
const cardCont = document.getElementById('cards-container');
const deleteAllBtn = document.getElementById('delete-all-btn');

function getUsersFromStorage() {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : [];
}

function saveUsersToStorage(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function renderUsers() {
  cardCont.innerHTML = '';
  const users = getUsersFromStorage();
  users.forEach(user => {
    const userCard = createUserCard(user); 
    cardCont.appendChild(userCard);
  })
};

function createUserCard(user) {
  const templateUser = document.getElementById('user-card-template');

  const cloneTemplate = templateUser.content.cloneNode(true);

  cloneTemplate.querySelector('.js-user-name').textContent = user.name;
  cloneTemplate.querySelector('.js-user-surname').textContent = user.surname;
  cloneTemplate.querySelector('.js-user-age').textContent = user.age;

  const deleteUserBtn = cloneTemplate.querySelector('.js-delete-btn');

  deleteUserBtn.addEventListener('click', () => {
  const users = getUsersFromStorage();
  const updatedUsers = users.filter(u => u.id !== user.id);
  saveUsersToStorage(updatedUsers);
  renderUsers();
});

  return cloneTemplate;
}

async function loadInitialData() {
  function showBtnDelete() {
  const showBtnDelete = document.getElementById('delete-all-btn');
  showBtnDelete.classList.add('show')
};
  try {
    const response = await fetch('async.json');
    const initialUsers = await response.json();

    saveUsersToStorage(initialUsers);

    if (textLoad) textLoad.remove();

    renderUsers();
  } catch (error) {
    console.error("Не удалось загрузить данные:", error);
  }
  showBtnDelete();
}

loadInitialData();
