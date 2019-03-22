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

  
});
