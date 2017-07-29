
function uniteUnique(arr) {
  var args = Array.from(arguments);
  var union = arr;
  var a = [];
  var b = [];
  for(var i = 1; i< args.length; i++){
     /*
    for(var j = 0; j < args[i].length; j++){
      a = (union.filter(function(x){ return x !== args[i][j];}));
     
    }
    */
    
    b = args[i];
    for( var k = 0; k < union.length; k++){
      //b = (args[i].filter(function(x){ return x !== union[k];}));
      b = b.filter(function(x){ return x !== union[k];});
    }
    
    union = union.concat(b);
    
  }
  return union;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
