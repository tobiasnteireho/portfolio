
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for(var i = 0; i < arr2.length; i++){
      var j=0;
      for(; j < arr1.length; j++){
        if (arr1[j][1] === arr2[i][1]){
          arr1[j][0] += arr2[i][0];
          break;
        }
      }
      if (j === arr1.length){
        arr1.push(arr2[i]);
      }
    }
  arr1.sort(function(a, b){ return (a[1] > b[1]);});
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
