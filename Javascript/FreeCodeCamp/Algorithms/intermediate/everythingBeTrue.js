
function truthCheck(collection, pre) {
  // Is everyone being true?
  var ret = false;
  var n = 0;
  for (var i = 0; i < collection.length; i++, n++){
    if(collection[i].hasOwnProperty(pre)){
      if (collection[i][pre])
        continue;
      else
        break;
    } else
      break;
    
  }
  return (collection.length === n);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
