
function translatePigLatin(str) {
  var f = str[0];
  var i = 0;
  for (i =0; i< str.length; i++){
    f = str[i].match(/[aeiou]/gi);
    if (f)
      break;
  }
  
  var ending = (i == 0) ? "way" : "ay";
  
  /*
  if (i){
    str = str.substr(1, str.length) + str[0] + "ay";
  } else {
    str += "way";
  }
  */
  str = str.substr(i, str.length) + str.substr(0,i) + ending;
  
  
  return str;
}

translatePigLatin("consonant");
