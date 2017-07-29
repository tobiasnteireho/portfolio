
function mutation(arr) {
  var a = arr[0].toLowerCase();//.sort();
  var b = arr[1].toLowerCase();//.sort();
  
  var sa = {};
  for (var i = 0; i < a.length; i++){
    if(!sa.hasOwnProperty(a[i])){
      sa[a[i]] = 1;
    }
  }
  
  var ret = true;
  for (i = 0; i <b.length; i++){
    if (!sa.hasOwnProperty(b[i])){
      ret = false;
    }
  }
  return ret;
}

mutation(["hello", "hey"]);
