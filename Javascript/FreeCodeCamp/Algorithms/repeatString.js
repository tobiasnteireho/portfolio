
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0){
    str = "";
  } else {
    var token = str;
    for (var i = 1; i < num; i++){
      str += token; 
    }
     
  }
  
     
  return str;
}

repeatStringNumTimes("abc", 3);
