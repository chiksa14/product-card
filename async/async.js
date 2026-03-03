const statusLoad = document.getElementById('status-load');
const cardsContainer = document.getElementById('cards-container');
const deleteAllCardsBtn = document.getElementById('delete-all-cards-btn');

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

function showBtnDelete() {
  deleteAllCardsBtn.classList.add('show')
};

function hideBtnDelete() {
  deleteAllCardsBtn.classList.remove('show')
};

async function loadInitialData() {
  const existingUsers = getUsersFromStorage();

  if (existingUsers.length > 0) {
    if (statusLoad) statusLoad.remove();
    renderUsers();
    showBtnDelete();
  } else {
    try {
      const response = await fetch('async.json');
      const result = await response.json();

      saveUsersToStorage(result.users);

      if (statusLoad) statusLoad.remove();
      renderUsers();
      showBtnDelete();
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
    hideBtnDelete();
    console.log('Все карточки удалены');
  }
}

deleteAllCardsBtn.addEventListener('click', handleDeleteAllCards);

loadInitialData();
