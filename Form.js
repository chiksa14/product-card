class Form {
  constructor(id){
    this.formElement = document.getElementById(id);
    console.log(`Форма с ID "${id}" успешно найдена.`);
  }

  getValues() {
    const values = {};
    const elements = this.formElement.elements;
    for (let element of elements) {
      if (element.name) {
        values[element.name] = element.value;
      }
    }
    return values;
  }

  isValid() {
    const elements = this.formElement.elements;
    for (let element of elements) {
      if (element.required) {
        if (!element.value.trim()) {
          return false;
        }
      }
    }
    return true;
  }

  reset() {
    this.formElement.reset();
  }
}

const test1 = new Form('regForm');
test1.getValues()