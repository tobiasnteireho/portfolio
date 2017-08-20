
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var orbital = [];
  for (var i  = 0; i < arr.length; i++){
    var T = Math.round(2*Math.PI * Math.pow(
      Math.pow(arr[i].avgAlt+earthRadius,3)/GM, 0.5));
    orbital.push({"name":arr[i].name, "orbitalPeriod":T});
  }
  return orbital;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
