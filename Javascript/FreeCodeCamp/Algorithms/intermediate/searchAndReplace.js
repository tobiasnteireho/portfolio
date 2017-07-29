
function myReplace(str, before, after) {
  var x = before.match(/[A-Z]/g);
  if (x)
    after = after[0].toUpperCase() + after.substr(1, after.length);
  str = str.replace(before, after);
  return str;//str;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
