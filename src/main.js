import './styles.css';
import  Warrior  from './warrior'


$(document).ready(function() {
  var newWarrior;
  $("#pickCharacter").submit(function(event){
    event.preventDefault();
    var characterType = $("#character").val();
    if(characterType === "warrior"){
      newWarrior = new Warrior();
      $("#intro").hide();
      $("#game").show();
      $("#charactertype").text(characterType);
      $("#health").text("Current Health: " + newWarrior.health);
      $("#level").text("Current Level: " + newWarrior.level);
      $("#strength").text("Current Strength: " + newWarrior.strength);
      $("#items").text("Current Items: " + newWarrior.items);
    }
    
  });
  $("#fight").click(function(){
    newWarrior.fight();
    if(newWarrior.gameOver === false){
      $("#health").text("Current Health: " + newWarrior.health);
      $("#level").text("Current Level: " + newWarrior.level);
      $("#strength").text("Current Strength: " + newWarrior.strength);
    } else {
      $("#gameOver").show();
      $("#game").hide();
    }
  });
  
  $("#menu").click(function(){
    location.reload();
  });
  
  $("#revive").click(function(){
    newWarrior.revive();
    $("#health").text("Current Health: " + newWarrior.health);
    $("#level").text("Current Level: " + newWarrior.level);
    $("#strength").text("Current Strength: " + newWarrior.strength);
    $("#game").show();
    $("#gameOver").hide();
  });

});
