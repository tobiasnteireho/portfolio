
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //var i = arr.indexOf(num);
  
  //if (i == -1){
    arr.push(num);
     arr.sort(function(a,b){ return a -b;});
  //} else {
    //i = 0;
  //}
  var i = arr.indexOf(num);
  
  
  return i;//arr;
}

getIndexToIns([40, 60], 50);
//getIndexToIns([3, 10, 5], 3);
