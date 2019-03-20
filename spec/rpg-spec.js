import  Warrior from './../src/warrior';
import  Monster from './../src/monster';
// import  { Fight }  from './../src/rpg';


describe('Warrior', function() {

  it('create new warrior object', function() {
    var newWarrior = new Warrior();
    expect(newWarrior.damage).toEqual(5);
  });

  it('create new monster object', function() {
    var newMonster = new Monster();
    expect(newMonster.damage).toEqual(2);
  });

  it('should fight and defeat monster', function() {
    var newWarrior = new Warrior();
    newWarrior.fight();
    newWarrior.fight();
    expect(newWarrior.level).toEqual(3);
    expect(newWarrior.strength).toEqual(9);

  });

});
