export default class Shop {
  constructor() {
    this.item = new Map();
    this.addItemToShop();
  }
  
  addItemToShop(){
    this.item.set("body armor", 200);
    this.item.set("head armor", 100);
    this.item.set("sword", 400);
    this.item.set("wand", 400);
    this.item.set("healthpotion", 500);
  }
}