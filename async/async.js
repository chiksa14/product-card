const statusLoad = document.getElementById('status-load');
const cardsContainer = document.getElementById('cards-container');
const mainActionBtn = document.getElementById('main-action-btn');

function getUsersFromStorage() {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : [];
}

function saveUsersToStorage(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function renderUsers() {
  cardsContainer.innerHTML = '';
  const users = getUsersFromStorage();
  users.forEach(user => {
    const userCard = createUserCard(user); 
    cardsContainer.appendChild(userCard);
  })
  updateMainButton()
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
  const existingUsers = getUsersFromStorage();
  if (existingUsers.length > 0) {
    if (statusLoad) {
      statusLoad.remove();
      renderUsers();
      updateMainButton();
    }
  } else {
    try {
      const response = await fetch('async.json');
      const result = await response.json();

      saveUsersToStorage(result.users);

      if (statusLoad) {
        statusLoad.remove();
        renderUsers();
        updateMainButton();
      }
    } catch (error) {
      console.error("Не удалось загрузить данные:", error);
    }
  }
}

function handleDeleteAllCards() {
  const isConfirmed = confirm('Вы уверены, что хотите удалить всех пользователей?');

  if (isConfirmed) {
    saveUsersToStorage([]);
    renderUsers();
    console.log('Все карточки удалены');
  }
}

async function handleLoadInitialCards() {
  try {
    const response = await fetch('async.json');
    const result = await response.json();

    saveUsersToStorage(result.users);

    renderUsers();
  } catch (error) {
    console.error("Не удалось загрузить данные:", error);
  }
}

function updateMainButton() {
  const users = getUsersFromStorage();

  if (users.length === 0) {
    mainActionBtn.textContent = 'Загрузить карточки';
    mainActionBtn.classList.add('btn-load-cards');
    mainActionBtn.classList.remove('btn-delete-cards');
  } else {
    mainActionBtn.textContent = 'Удалить карточки';
    mainActionBtn.classList.remove('btn-load-cards');
    mainActionBtn.classList.add('btn-delete-cards');
  }
}

mainActionBtn.onclick = () => {
  const users = getUsersFromStorage();
  if (users.length > 0) {
    handleDeleteAllCards();
  } else {
    handleLoadInitialCards();
  }
};

loadInitialData();
