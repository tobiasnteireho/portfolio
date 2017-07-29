/*
function bin2dec(bin){
  var ret = 0;
  for (var q = 0;  q <  bin; q++){
    var z = String.parseInt(q)
    ret +=  z * Math.pow(2, z);
  }
}
*/
function binaryAgent(str) {
  var a = str.split(" ");
  var phrase = [];
  for (var i = 0; i < a.length; i++){
    phrase.push(String.fromCharCode(parseInt(a[i],2)));
  }
  return phrase.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
