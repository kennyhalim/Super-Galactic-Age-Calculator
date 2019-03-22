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

});
