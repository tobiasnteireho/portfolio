
function dropElements(arr, func) {
  // Drop them elements.
  var z = arr.map(func);
  var x = z.indexOf(true);
  var ret = (x===-1) ? [] : arr.splice(x, arr.length);
  
  return ret;
}

//dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
