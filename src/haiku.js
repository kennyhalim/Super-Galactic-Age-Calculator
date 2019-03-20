export function Haiku(line1,line2,line3){
  this.line1 = line1,
  this.line2 = line2,
  this.line3 = line3;
}

Haiku.prototype.checkFirstLine = function(){
  const vowels = "aeiou";
  let count = 0;
  let firstLine = this.line1.split(" ");
  firstLine.forEach(function(word){
    if(word[length-1] === "e"){
      count--;
    }
    for (let i=0 ; i<word.length ; i++){
      if(vowels.indexOf(word[i]) >= 0){
        count++;
        if(IsVowels(word[i]) && IsVowels(word[i+1])){
          count--;
        }
      }      
    }
  });
  if(count === 5){
    return true;
  }
  return false;
}

Haiku.prototype.checkSecondLine = function(){
  const vowels = "aeiou";
  let count = 0;
  let secondLine = this.line2.split(" ");
  secondLine.forEach(function(word){
    if(word[length-1] === "e"){
      count--;
    }
    for (let i=0 ; i<word.length ; i++){
      if(vowels.indexOf(word[i]) >= 0){
        count++;
        if(IsVowels(word[i]) && IsVowels(word[i+1])){
          count--;
        }
      }      
    }
  });
  if(count === 7){
    return true;
  }
  return false;
}

Haiku.prototype.checkThirdLine = function(){
  const vowels = "aeiou";
  let count = 0;
  let thirdLine = this.line3.split(" ");
  thirdLine.forEach(function(word){
    if(word[length-1] === "e"){
      count--;
    }
    for (let i=0 ; i<word.length ; i++){
      if(vowels.indexOf(word[i]) >= 0){
        count++;
        if(IsVowels(word[i]) && IsVowels(word[i+1])){
          count--;
        }
      }      
    }
  });
  if(count === 5){
    return true;
  }
  return false;
}

Haiku.prototype.isHaiku = function(){
  if(this.checkFirstLine() === true && this.checkSecondLine() === true && this.checkThirdLine() === true){
    return true;
  }
  return false;
}

function IsVowels(letter) {
  const vowels = "aeiou";
  if(vowels.includes(letter)) {
    return true;
  }
  return false;
}
