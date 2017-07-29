
function addTogether() {
  
  var args =  Array.from(arguments);
  
  var ret; 
  if (args.length === 2){
    ret = args[0] + args[1];
    
    if ((typeof args[0] != "number") ||
      (typeof args[1] != "number"))
      ret = undefined;
  }
  
  if (args.length === 1) {
    ret  = function(a){
      var z = null;
      if (typeof a != "number")
        z = undefined;
      else
        z = a + args[0];
      
      return z;
    };
    if (typeof args[0] != "number")
      ret = undefined;
  }
  return ret;//ret;
}

addTogether(2,3);
