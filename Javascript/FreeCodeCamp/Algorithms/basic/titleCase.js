
function titleCase(str) {
  str = str.toLowerCase();
  var words = str.split(" ");
  words = words.map(function(a){return a[0].toUpperCase() + a.substr(1, a.length);});
  
  str = words.reduce(function(a, b) { return a + " " + b;});
  
  return str;
}

titleCase("I'm a little tea pot");
