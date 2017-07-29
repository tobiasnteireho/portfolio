
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var args2 = Array.from(arguments);
  var arr2 = arr;
  //args = args.slice(0, args.length);
  args.shift();
  /*
  for (var z in args) {
    arr = arr.filter(
      function(a){
        return (a !== z);
      });
    
  }
  */
  args2.shift();
  var arr3 =arr;
  //for (var i = 0; i < arr2.length; i++){
    for (var j = 0; j < args2.length; j++){
      arr3 = arr3.filter(
      function(a){
        return (a !== args2[j]);
      });
    }
      
  //args2.shift();
  return arr3;
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
