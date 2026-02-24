const textLoad = document.getElementById('text-load');

function showCards() {
  const cardCont = document.getElementById('cards-container');
  const usersData = localStorage.getItem('users');
  try {
  const users = JSON.parse(usersData);

  if (users && users.length > 0) {
    console.log('Данные есть:', users);
    cardCont.innerHTML = '';
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <h3>${user.name}</h3> 
        <h3>${user.surname}</h3>
        <p>Возраст: ${user.age}</p>
        <button class="delete-btn" data-id="${user.id}">Удалить</button>
        `;
        cardCont.appendChild(card);
        const deleteOneCard = card.querySelector('.delete-btn');
        deleteOneCard.addEventListener('click', () => {
          const cardId = deleteOneCard.dataset.id;
          const users = JSON.parse(localStorage.getItem('users'));
          const updatedUsers = users.filter(user => user.id != cardId);
          localStorage.setItem('users', JSON.stringify(updatedUsers));
          showCards();
        })
    })
  } else {
    console.log('Нет данных');
    cardCont.innerHTML = '<p>Нет пользователей</p>';
  }
  
} catch (error) {
  console.error("Ошибка парсинга JSON:", error.message);
}
}

const deleteAllBtn = document.getElementById('delete-all-btn');
if (deleteAllBtn) {
  deleteAllBtn.addEventListener('click', () => {
    const userConfirmed = confirm('Вы уверены, что хотите удалить все карточки?');
      if (userConfirmed) {
        localStorage.removeItem('users');
        showCards();
      }
  });
}


function showBtnDelete() {
  const showBtnDelete = document.getElementById('delete-all-btn');
  showBtnDelete.classList.add('show')
};

if (textLoad) {
  setTimeout(() => {
    textLoad.remove();
  async function getUser() {
  const responce = await fetch('async.json');
  const user = await responce.json();
  console.log(user)
  localStorage.setItem('users', JSON.stringify(user));
  const users = localStorage.getItem('users');
  console.log(users);
}

setTimeout(() => {
  getUser();
  showCards();
  showBtnDelete()
}, 4500);
}, 4000); 
}


