import './styles.css';
import  Calculator  from './calculator';


$(document).ready(function() {

  $("#ageForm").submit(function(event){
    event.preventDefault();
    var birthday = $("#birthDate").val();
    var sodaDrank = $("#soda").val();
    var junkFoodEaten = $("#junkfood").val();
    var vegetablesEaten = $("#vegetables").val();
    var sportsPlayed = $("#sport").val();
    var newCalc = new Calculator(birthday, sodaDrank, junkFoodEaten, vegetablesEaten, sportsPlayed);
    $("#intro").hide();
    $("#result").show();
    $("#age").text("Your current age is: " + newCalc.getAge());
    $("#mercuryAge").text("Your current age in Mercury is: " + newCalc.getAgeInMercury());
    $("#venusAge").text("Your current age in Venus is: " + newCalc.getAgeInVenus());
    $("#marsAge").text("Your current age in Mars is: " + newCalc.getAgeInMars());
    $("#jupiterAge").text("Your current age in Jupiter is: " + newCalc.getAgeInJupiter());
    if(newCalc.getLifeExpectancy() === -1){
      $("#lifeExpectancy").text("You have exceeded your average life expentancy, Congratulations and stay fit and healthy!");
    } else {
      $("#lifeExpectancy").text("Your life expectancy is " + newCalc.getLifeExpectancy());
    }

    $("#reload").click(function(){
      location.reload();
    })
  });
});
