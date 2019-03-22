export default class Calculator {
  constructor(birthDate) {
    this.birthDate = birthDate;
    this.year = parseInt(birthDate.substr(0,4));
    this.month = parseInt(birthDate.substr(5,2));
    this.day = parseInt(birthDate.substr(8,2));
  }

  

}
