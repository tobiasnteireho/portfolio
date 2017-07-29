function checkAlphaNum(a){
  a = a.toLowerCase();
  return ((a >= "0") && (a <= "9")) ||
      ((a >= "a") && (a <= "z"));
}
function palindrome(str) {
  // Good luck!
  var isPalindrome = true;
  str = str.toLowerCase();
  //str.replace(r"[]")
  for (var a = 0, b= str.length; a <= str.length/2 && (a < b--) ; a++){
    var ca = str[a];
    var cb = str[b];
    while (!checkAlphaNum(ca)){
      a++;
      ca = str[a];
    }
    while (!checkAlphaNum(cb)){
      b--;
      cb = str[b];
    }
    if (a >= b)
      break;
    if ( ca !== cb) {
      isPalindrome = false;
      break;
    }
    //b--;
  }
  return isPalindrome;
}



palindrome("eye");
