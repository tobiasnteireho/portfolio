
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var rex;
  //for(var i = 1; i < str.length; i++){
    //var a = str[i].match(/[A-Z]/);
    //var b = str[i-1].match(/[A-Z]/);
    //if (a || b)
  //str = str[0].toUpperCase() + str.substr(1, str.length);
    rex = str.match(/([a-z]+|[A-Z][a-z]+)/g);
   rex = rex.join("-");
  rex = rex.toLowerCase();
  
    
  //}
  
  str = str.toLowerCase();
  var re = new RegExp(" ", "g");
  str = str.replace(re, "-");
  re = new RegExp("_", "g");
  str = str.replace(re, "-");
  
  return rex;//str;
}

//spinalCase('This Is Spinal Tap');
spinalCase("AllThe-small Things");
