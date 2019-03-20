import  Monster from './../src/monster';
export default class Warrior {
  constructor() {
    this.health = 100;
    this.strength = 5;
    this.level = 1;
    this.damage = this.strength * this.level;
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
      this.revive();
    }
  }

  levelUp() {
    this.health = 100;
    this.level += 1;
    this.strength += 2;
  }

  revive() {
    this.health = 100;
    if(this.level >= 1){
      this.level -= 1;
    }
    if(this.strength >= 1){
      this.strength -= 1;
    }
  }

}
