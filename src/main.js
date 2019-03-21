import './styles.css';
import  Warrior  from './warrior'
import  Wizard  from './wizard'


$(document).ready(function() {
  var newWarrior;
  $("#pickCharacter").submit(function(event){
    event.preventDefault();
    var characterType = $("#character").val();
    if(characterType === "warrior"){
      newWarrior = new Warrior();
      $("#intro").hide();
      $("#warriorchar").show();
      $("#charactertype").text(characterType);
      $("#health").text("Current Health: " + newWarrior.health);
      $("#level").text("Current Level: " + newWarrior.level);
      $("#strength").text("Current Strength: " + newWarrior.strength);
      $("#money").text("Current Money: $" + newWarrior.money);
      $("#items").text("Current Items: " + newWarrior.items);
      
      $("#fight").click(function(){
        newWarrior.fight();
        if(newWarrior.gameOver === false){
          $("#health").text("Current Health: " + newWarrior.health);
          $("#level").text("Current Level: " + newWarrior.level);
          $("#strength").text("Current Strength: " + newWarrior.strength);
          $("#money").text("Current Money: $" + newWarrior.money);
          $("#items").text("Current Items: " + newWarrior.items);
        } else {
          $("#gameOver").show();
          $("#warriorchar").hide();
        }
      });
      
      $("#useArmor").click(function(){
        newWarrior.useBodyArmor();
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#useSword").click(function(){
        newWarrior.useSword();
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#usePotion").click(function(){
        newWarrior.usePotion();
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#removeArmor").click(function(){
        newWarrior.removeBodyArmor();
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#removeSword").click(function(){
        newWarrior.removeSword();
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#shopArmor").click(function(){
        newWarrior.buyItem("body armor");
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#shopSword").click(function(){
        newWarrior.buyItem("sword");
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#shopPotion").click(function(){
        newWarrior.buyItem("healthpotion");
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#money").text("Current Money: $" + newWarrior.money);
        $("#items").text("Current Items: " + newWarrior.items);
      });
      
      $("#menu").click(function(){
        location.reload();
      });
      
      $("#revive").click(function(){
        newWarrior.revive();
        $("#health").text("Current Health: " + newWarrior.health);
        $("#level").text("Current Level: " + newWarrior.level);
        $("#strength").text("Current Strength: " + newWarrior.strength);
        $("#warriorchar").show();
        $("#gameOver").hide();
      });
    } else if(characterType === "wizard"){
      newWarrior = new Wizard();
      $("#intro").hide();
      $("#wizardchar").show();
      $("#charactertype2").text(characterType);
      $("#health2").text("Current Health: " + newWarrior.health);
      $("#level2").text("Current Level: " + newWarrior.level);
      $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
      $("#money2").text("Current Money: $" + newWarrior.money);
      $("#items2").text("Current Items: " + newWarrior.items);
      
      $("#fight2").click(function(){
        newWarrior.fight();
        if(newWarrior.gameOver === false){
          $("#health2").text("Current Health: " + newWarrior.health);
          $("#level2").text("Current Level: " + newWarrior.level);
          $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        } else {
          $("#gameOver").show();
          $("#wizardchar").hide();
        }
      });
      
      $("#useArmor2").click(function(){
        newWarrior.useBodyArmor();
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#useWand").click(function(){
        newWarrior.useWand();
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#usePotion2").click(function(){
        newWarrior.usePotion();
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#removeArmor2").click(function(){
        newWarrior.removeBodyArmor();
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#removeWand").click(function(){
        newWarrior.removeSword();
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#shopArmor2").click(function(){
        newWarrior.buyItem("body armor");
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#shopWand").click(function(){
        newWarrior.buyItem("wand");
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#shopPotion2").click(function(){
        newWarrior.buyItem("healthpotion");
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Intelligence: " + newWarrior.intelligence);
        $("#money2").text("Current Money: $" + newWarrior.money);
        $("#items2").text("Current Items: " + newWarrior.items);
      });
      
      $("#menu").click(function(){
        location.reload();
      });
      
      $("#revive").click(function(){
        newWarrior.revive();
        $("#health2").text("Current Health: " + newWarrior.health);
        $("#level2").text("Current Level: " + newWarrior.level);
        $("#intelligence").text("Current Strength: " + newWarrior.intelligence);
        $("#wizardchar").show();
        $("#gameOver").hide();
      });
    }
  });
});
