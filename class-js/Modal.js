export class Modal {
  constructor(id) {
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
      return true;
    } else {
      return false;
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


