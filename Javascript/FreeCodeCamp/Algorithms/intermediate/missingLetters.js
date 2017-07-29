
function fearNotLetter(str) {
  /*
  var cur_min = 65;
  var cur_max = 65;
  for(var i = 0; i < str.length; i++){
    var c = str[i].charCodeAt();
    cur_min = Math.min(c, cur_min);
    cur_max = Math.max(c, cur_max);
  }
  */
  //str = String.fromCharCode(65 + cur_max - cur_min -1);
  var a = str.split('');
  //a.sort();
  //a = a.join('');
  var ret = undefined;
  for (var i = 1; i < str.length; i++){
    if (str[i].charCodeAt() - str[i-1].charCodeAt() !== 1){
      ret = String.fromCharCode(str[i -1].charCodeAt() + 1);
      break;
    }
  }
  return ret;
}

fearNotLetter("abce");
//fearNotLetter("abcdefghjklmno");
