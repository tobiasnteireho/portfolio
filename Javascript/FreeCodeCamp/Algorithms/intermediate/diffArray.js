
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  z = (arr1.length >= arr2.length)?
  {"larger": arr1, "smaller": arr2 }:
  {"larger": arr2, "smaller": arr1 };
  //for(var i  = 0; i < z.larger.length; i++){
    myArray = z.larger.filter(
      function(a) {return (z.smaller.indexOf(a) === -1);});
  z.smaller = z.smaller.filter(
      function(a) {return (z.larger.indexOf(a) === -1);});
  
  myArray = myArray.concat(z.smaller);
  return myArray;//newArray;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
