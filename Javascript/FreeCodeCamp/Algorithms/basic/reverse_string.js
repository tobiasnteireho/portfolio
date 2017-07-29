
function reverseString(str) {
  var revStr = "";
  /*
  for (var i = str.length - 1; i >= 0; i-- ){
    revStr += str[i];
  }
  */
  revStr = str.split('').reverse().join('');
  return revStr;
}

reverseString("hello");
