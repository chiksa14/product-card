export class Form {
  constructor(id){
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

    const values = {};

    Object.assign(values, Object.fromEntries(formData.entries()));
    console.log(values);
  }

  isValid() {
    const elements = this.formElement.checkValidity();
    console.log(`Валидность:${elements}`)
  }

  reset() {
    this.formElement.reset();
  }
}
