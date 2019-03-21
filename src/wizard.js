import  Monster from './../src/monster';
import  Shop from './../src/shop';
export default class Wizard {
  constructor() {
    this.health = 100;
    this.intelligence = 5;
    this.level = 1;
    this.damage = 5;
    this.items = [];
    this.bodyArmor = false;
    this.wandEquipped = false;
    this.money = 1000;
    this.gameOver = false;
  }
  
  fight() {
    let monsters = [];
    for(let i = 0;i < this.level;i++){
      let monster = new Monster();
      monsters.push(monster);
    }
    for(let i = 0; i < monsters.length;i++){
      while(monsters[i].health > 0){
        if(this.health <= 0){
          break;
        }
        monsters[i].health = monsters[i].health - this.damage;
        this.health = this.health - monsters[i].damage;    
      }
    }

    if(this.health > 0){
      this.levelUp();
    } else {
      this.gameOver = true;
    }
  }

  levelUp() {
    this.health = 100;
    this.level += 1;
    this.intelligence += 2;
    this.damage += 3;
    this.money += 200;
  }

  revive() {
    this.health = 100;
    this.level -= 1;
    this.damage += 1;
    this.intelligence += 1;
    this.gameOver = false;
  }

  buyItem(newitem) {
    let shop = new Shop();
    let cost = shop.item.get(newitem);
    this.items.push(newitem);
    this.money = this.money - cost;
  }

  usePotion(){
    if(this.items.includes("healthpotion")){
      this.health += 20;
      var firstIndexOfPotion = this.items.indexOf("healthpotion");
      this.items.splice(firstIndexOfPotion,1);
    } else {
      alert("potion not found");
    }
  }

  useBodyArmor() {
    if(this.bodyArmor === false){
      if(this.items.includes("body armor")){
        this.intelligence += 5;
        this.bodyArmor = true;
        var indexOfBodyArmor = this.items.indexOf("body armor");
        this.items.splice(indexOfBodyArmor,1);
      }
    } else {
      return false;
    }
    
  }

  removeBodyArmor(){
    if(this.bodyArmor === true){
      this.intelligence -= 5;
      this.bodyArmor = false;
      this.items.push("body armor");
    } else {
      return false;
    }
  }

  useWand() {
    if(this.wandEquipped === false){
      if(this.items.includes("wand")){
        this.intelligence += 10;
        this.wandEquipped = true;
        var indexOfWand = this.items.indexOf("wand");
        this.items.splice(indexOfWand,1);
      }
    } else {
      return false;
    }    
  }

  removeWand() {
    if(this.wandEquipped === true){
      this.intelligence -= 10;
      this.wandEquipped = false;
      this.items.push("wand");
    } else {
      return false;
    }
  }


  }