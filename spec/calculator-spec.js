import Calculator from './../src/calculator';

describe('Calculator', function() {
  var newCalc;

  beforeEach(function() {
    newCalc = new Calculator("1998-05-22");
  });

  it('should create a new calculator object', function() {
    var date = "1998-05-22";
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
    var newAge = new Calculator("1998-03-25");
    expect(newAge.getAge()).toEqual(20);
  });

  it('should get the correct age with same month and day', function() {
    var newAge = new Calculator("1998-03-22");
    expect(newAge.getAge()).toEqual(21);
  });

});
