export default class Calculator {
  constructor(birthDate, soda, junkFood, vegetables, sport) {
    this.birthDate = birthDate;
    this.year = parseInt(birthDate.substr(0,4));
    this.month = parseInt(birthDate.substr(5,2));
    this.day = parseInt(birthDate.substr(8,2));
    this.soda = soda;
    this.junkFood = junkFood;
    this.vegetables = vegetables;
    this.sport = sport;
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
    return parseFloat((this.getAge() * 0.24).toFixed(1));
  }

  getAgeInVenus() {
    return parseFloat((this.getAge() * 0.62).toFixed(1));
  }

  getAgeInMars() {
    return parseFloat((this.getAge() * 1.88).toFixed(1));
  }

  getAgeInJupiter() {
    return parseFloat((this.getAge() * 11.86).toFixed(1));
  }

  getLifeExpectancy() {
    var lifeExpectancy = 80 - (this.soda * 3) - (this.junkFood * 5) + (this.vegetables * 4) + (this.sport * 6);
    return lifeExpectancy;
  }

}
