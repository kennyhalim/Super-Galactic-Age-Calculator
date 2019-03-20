import './styles.css';
import { Haiku } from './haiku.js'


$(document).ready(function() {

  
  $("#haiku").submit(function(event){
    event.preventDefault();
    let firstLine = $("#line1").val();
    let secondLine = $("#line2").val();
    let thirdLine = $("#line3").val();
    let haikuTest = new Haiku(firstLine, secondLine, thirdLine);
    if(haikuTest.isHaiku() === true){
      $("#solution").text("THIS IS A HAIKU GOOD JOB");
    } else {
      $("#solution").text("not a haiku.");
    }
  })
});
