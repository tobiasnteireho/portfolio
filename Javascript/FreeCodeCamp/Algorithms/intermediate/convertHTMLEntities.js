
function convertHTML(str) {
  // &colon;&rpar;
  var esc = {"&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&apos;"};
  
  for (var z in esc){
    var re = new RegExp(z, "g"); 
    str = str.replace(re, esc[z]);
  }
  
  
  return str;
}

//convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
