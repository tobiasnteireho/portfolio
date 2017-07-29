
function rot13(str) { // LBH QVQ VG!
  var rotStr = "";
  for(var i = 0; i < str.length; i++){
    var c = str[i], rotC = "";
    if ((c >= "A") && (c <= "Z")){
        c= str.charCodeAt(i);
       rotC = String.fromCharCode(65 + (c+13 - 65)%26);
    } else {
      rotC = c;
    }
    
    rotStr += rotC;
  }
  return rotStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
