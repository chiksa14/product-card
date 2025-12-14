class Modal {
  constructor(id) {
    this.id = id;
    this.element = document.getElementById(id);
    this.closeBtn = this.element.querySelector('#closeModalBtn');
    this.init();
  }

  open() {
    this.element.classList.add('modal-showed');
  }

  close() {
    this.element.classList.remove('modal-showed');
  }

  isOpen() {
    if (this.element.classList.contains('modal-showed')) {
      return console.log('modal window opened');
    } else {
      console.log('modal window closed')
    }
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}

const modalInstance = new Modal('loginModal');
modalInstance.isOpen();
