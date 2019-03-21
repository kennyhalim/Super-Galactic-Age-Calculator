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
    newWarrior.fight();
    expect(newWarrior.level).toEqual(4);
    expect(newWarrior.strength).toEqual(11);

  });
  
  it('should be able to buy items from shop', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("sword");
    let testarmor = ["sword"];
    expect(newWarrior.money).toEqual(600);
    expect(newWarrior.items).toEqual(testarmor);
  });
  
  it('should be able to buy potion and use it', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("healthpotion");
    newWarrior.usePotion();
    var testarmor = [];
    expect(newWarrior.money).toEqual(950);
    expect(newWarrior.items).toEqual(testarmor);
  });
  
  it('should be able to use body armor', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("body armor");
    newWarrior.useBodyArmor();
    var testarmor = [];
    expect(newWarrior.money).toEqual(800);
    expect(newWarrior.bodyArmor).toEqual(true);
    expect(newWarrior.strength).toEqual(10);
    expect(newWarrior.items).toEqual(testarmor);
  });
  
  it('should be able to remove body armor', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("body armor");
    newWarrior.useBodyArmor();
    newWarrior.removeBodyArmor();
    var testarmor = ["body armor"];
    expect(newWarrior.bodyArmor).toEqual(false);
    expect(newWarrior.strength).toEqual(5);
    expect(newWarrior.items).toEqual(testarmor);
  });
  
  it('should not be able to remove body armor if not used', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("body armor");
    console.log(newWarrior.removeBodyArmor());
    expect(newWarrior.removeBodyArmor()).toEqual(false);
  });
  
  it('should not be able to use body armor if currently used', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("body armor");
    newWarrior.useBodyArmor();
    expect(newWarrior.useBodyArmor()).toEqual(false);
  });
  
  it('should be able to use sword', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("sword");
    newWarrior.useSword();
    var testarmor = [];
    expect(newWarrior.money).toEqual(600);
    expect(newWarrior.swordEquipped).toEqual(true);
    expect(newWarrior.strength).toEqual(15);
    expect(newWarrior.items).toEqual(testarmor);
  });
  
  it('should be able to remove sword', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("sword");
    newWarrior.useSword();
    newWarrior.removeSword();
    var testarmor = ["sword"];
    expect(newWarrior.swordEquipped).toEqual(false);
    expect(newWarrior.strength).toEqual(5);
    expect(newWarrior.items).toEqual(testarmor);
  });
  
  it('should not be able to remove sword if not used', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("sword");
    expect(newWarrior.removeSword()).toEqual(false);
  });
  
  it('should not be able to use sword if currently used', function() {
    var newWarrior = new Warrior();
    newWarrior.buyItem("sword");
    newWarrior.useSword();
    expect(newWarrior.useSword()).toEqual(false);
  });
});
