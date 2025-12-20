export class Form {
  constructor(id) {
    this.formElement = document.getElementById(id);
    if (this.formElement) {
      console.log(`id:'${id}' найден`)
    } else {
      console.log(`не найден ${id}`)
    }
  }

  init() {
    this.formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this.getValues();
      this.isValid()
    });
  }

  getValues() {
    const formData = new FormData(this.formElement);

    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  reset() {
    this.formElement.reset();
  }
}
