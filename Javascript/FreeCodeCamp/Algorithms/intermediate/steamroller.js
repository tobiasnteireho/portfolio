
function arrayBottom(arr){
  var ret = arr;
  if (Array.isArray(arr)){
    ret = arrayBottom(arr[0]);
  }
  return ret;
}

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var ret = [], b = [];
  for(var i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      b = steamrollArray(arr[i]);
      ret = ret.concat(b);

    } else
    ret.push(arrayBottom(arr[i]));
  }
  return ret;
}

steamrollArray([1, [2], [3, [[4]]]]);
