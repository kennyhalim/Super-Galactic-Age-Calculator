import Calculator from './../src/calculator';

describe('Calculator', function() {
  let newCalc;

  beforeEach(function() {
    newCalc = new Calculator("1998-05-22",3,3,1,4);
  });

  it('should create a new calculator object', function() {
    let date = "1998-05-22";
    expect(newCalc.birthDate).toEqual(date);
  });

  it('should get the correct year', function() {
    expect(newCalc.year).toEqual(1998);
  });

  it('should get the correct month', function() {
    expect(newCalc.month).toEqual(5);
  });

  it('should get the correct day', function() {
    expect(newCalc.day).toEqual(22);
  });

  it('should get the correct age', function() {
    expect(newCalc.getAge()).toEqual(20);
  });

  it('should get the correct age with same month', function() {
    let newAge = new Calculator("1998-03-25",3,3,3,1);
    expect(newAge.getAge()).toEqual(21);
  });

  it('should get the correct age with same month and day', function() {
    let newAge = new Calculator("1998-03-22",3,3,3,1);
    expect(newAge.getAge()).toEqual(21);
  });

  it('should get the correct age in Mercury', function() {
    expect(newCalc.getAgeInMercury()).toEqual(4.8);
  });

  it('should get the correct age in Venus', function() {
    expect(newCalc.getAgeInVenus()).toEqual(12.4);
  });

  it('should get the correct age in Mars', function() {
    expect(newCalc.getAgeInMars()).toEqual(37.6);
  });

  it('should get the correct age in Jupiter', function() {
    expect(newCalc.getAgeInJupiter()).toEqual(237.2);
  });

  it('should get the correct life expectancy', function() {
    expect(newCalc.getLifeExpectancy()).toEqual(84);
  });

  it('should get the correct life expectancy if age has surpassed the life expectancy', function() {
    let testCalc = new Calculator("1910-01-01",1,1,1,0);
    expect(testCalc.getLifeExpectancy()).toEqual(-1);
  });
});
