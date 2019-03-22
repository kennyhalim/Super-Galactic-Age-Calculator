export default class Calculator {
  constructor(birthDate) {
    this.birthDate = birthDate;
    this.year = parseInt(birthDate.substr(0,4));
    this.month = parseInt(birthDate.substr(5,2));
    this.day = parseInt(birthDate.substr(8,2));
  }

  getDay() {
    return this.day;
  }

  getMonth() {
    return this.month;
  }

  getYear() {
    return this.year;
  }

  getAge() {
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var todayMonth = todayDate.getMonth() + 1; //starts from 0, so add 1
    var todayDay = todayDate.getDate();
    if(this.month > todayMonth){
      return todayYear - this.year - 1;
    } else if(this.month === todayMonth && this.day > todayDay){
      return todayYear - this.year - 1;
    }
    return todayYear - this.year;
  }

  getAgeInMercury() {
    alert(this.getAge() * 0.24);
    return this.getAge() * 0.24;
  }

  getAgeInVenus() {
    alert(this.getAge() * 0.62);
    return this.getAge() * 0.62;
  }

  getAgeInMars() {
    alert(this.getAge() * 1.88);
    return this.getAge() * 1.88;
  }

  getAgeInJupiter() {
    alert(this.getAge() * 11.86);
    return this.getAge() * 11.86;
  }

}
